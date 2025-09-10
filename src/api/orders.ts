import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";

export type Order = {
  id: string;
  userName: string;
  food: string;
  note: string;
  quantity: number;
  price: number;
  CreateAt: number;
};

export type Page = {
  items: Order[];
  nextCursor?: string;
  hasNext: boolean;
};

const TOTAL_ORDERS = 200;
const now = Date.now();

const orders = Array.from({ length: TOTAL_ORDERS })
  .map(
    (_, index): Order => ({
      id: `order-${index + 1}`,
      userName: `User ${index + 1}`,
      food: `Food Item ${index + 1}`,
      note: `2025-09-07 7:30 PM – Order #2045: Customer John D. placed a delivery order for 3x Chicken Biryani, 
      2x Garlic Naan, and 1x Mango Lassi; payment received online, scheduled delivery to 45 Elm Street at 8:15 PM, 
      no special instructions noted.`,
      quantity: 1,
      price: index + 1 * 10,
      CreateAt: now - index * 1000 * 60 * 60,
    })
  )
  .sort((a, b) => b.CreateAt - a.CreateAt);

export const ordersAPI = createApi({
  reducerPath: "orders",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    getOrders: builder.infiniteQuery<Page, number, string | undefined>({
      infiniteQueryOptions: {
        initialPageParam: undefined,
        getNextPageParam(lastPage) {
          return lastPage.hasNext ? lastPage.nextCursor : undefined;
        },
      },
      async queryFn({ queryArg, pageParam }) {
        return await new Promise((resolve) =>
          setTimeout(() => {
            const result = mockFetchPage(queryArg, pageParam);
            resolve({ data: result });
          }, 1000)
        );
      },
    }),
  }),
});

const mockFetchPage = (pageSize: number, cursor?: string): Page => {
  let startIndex = 0;
  if (cursor) {
    const cursorIndex = orders.findIndex((order) => order.id == cursor);
    startIndex = cursorIndex > 0 ? cursorIndex + 1 : 0;
  }
  const slice = orders.slice(startIndex, startIndex + pageSize + 1);
  const hasNext = slice.length > pageSize;
  const items = hasNext ? slice.slice(0, pageSize) : slice;
  return {
    items,
    hasNext,
    nextCursor: hasNext ? items[items.length - 1].id : undefined,
  };
};

export const { useGetOrdersInfiniteQuery } = ordersAPI;
