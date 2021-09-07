import React, { Component } from "react";
import { connect } from "react-redux";

export default (ChildComponent) => {
    class ComposedComponent extends Component {
        componentDidMount() {
            this.checkIfUserIsAuth();
        }

        componentDidUpdate() {
            this.checkIfUserIsAuth();
        }

        checkIfUserIsAuth() {
            if (!this.props.auth) {
                this.props.history.push("/");
            }
        }

        render() {
            return <ChildComponent {...this.props} />;
        }
    }

    function mapStatetoProps(state) {
        return { auth: state.auth };
    }

    return connect(mapStatetoProps)(ComposedComponent);
};
