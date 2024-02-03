import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import B from "../B";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({});

describe("회원가입 테스트", () => {
  test("테스트 코드 1", () => {
    const routes = [
      {
        path: "/",
        element: <B />,
      },
    ];

    const router = createMemoryRouter(routes, {
      initialEntries: ["/"],
      initialIndex: 0,
    });
    render(
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    );

    const div = screen.getByText("이 컴포넌트는 b 컴포넌트입니다.");
    console.log(div);

    console.log("success");
  });
});
