import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";

it("should render without crashing", () => {
  let wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});
