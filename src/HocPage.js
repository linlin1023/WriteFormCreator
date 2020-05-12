import React, { Component } from 'react'

const foo = Cmp => props=> <div style={{border:"1px red solid"}}><Cmp></Cmp></div>

@foo
class Child extends Component {
    render() {
        return (
            <div>
                Child
            </div>
        )
    }
}
const Foo = foo(Child)


class HocPage extends Component {
    render() {
        return (
            <div>
                <Child></Child>
                <Foo></Foo>
            </div>
        )
    }
}

export default HocPage
