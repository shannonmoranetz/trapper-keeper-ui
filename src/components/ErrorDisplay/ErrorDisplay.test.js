import React from "react";
import { shallow } from "enzyme";
import { ErrorDisplay } from "./ErrorDisplay";

describe("ErrorDisplay", () => {
  let wrapper;
  it("should render with no error and match snapshot", () => {
    wrapper = shallow(<ErrorDisplay location='path.com' />);
    expect(wrapper).toMatchSnapshot();
  });
});
