import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import { Chips } from "./chips";

describe("<Chips/> Component", () => {
  it("should render a Chips with the correct label", () => {
    const { queryByText } = render(
      <Chips action={() => {}} value="chips" checked={false} category="" />
    );

    expect(screen.queryByText("chips")).toBeInTheDocument();
  });

  it("should call the onClick handler when clicked", () => {
    const handleClick = vi.fn();
    render(
      <Chips action={handleClick} value="chips" checked={false} category="" />
    );

    fireEvent.click(screen.getByText("chips"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
