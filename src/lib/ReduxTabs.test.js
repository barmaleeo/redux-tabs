import React from "react";
import renderer from "react-test-renderer";
import ReduxTabs from "./ReduxTabs";

describe("TextInput", () => {
    it("renders properly", () => {
        const tree = renderer
            .create(<ReduxTabs label="Email" placeholder="name@example.com" />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});