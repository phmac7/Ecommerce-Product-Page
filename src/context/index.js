import React, { Component } from 'react'

const MyContext = React.createContext();

class MyProvider extends Component {

    state = {
        selectQty: 0,
        qtyCart: 0,
        highlight: false
    }

    toggleHighlight = () => {
        this.setState({ highlight: !this.state.highlight })
    }

    addSelectQty = () => {
        const { selectQty } = this.state
        this.setState({
            selectQty: selectQty + 1
        })
    }

    decreaseSelectQty = () => {
        const { selectQty } = this.state
        if (selectQty == 0) {
        } else {
            this.setState({
                selectQty: selectQty - 1
            })
        }
    }

    addToCart = () => {
        const { selectQty, qtyCart } = this.state
        this.setState({
            qtyCart: qtyCart + selectQty,
            selectQty: 0
        })
    }

    resetCart = () => {
        this.setState({
            qtyCart: 0
        })
    }



    render() {
        return (
            <MyContext.Provider value={{
                qtyCart: this.state.qtyCart,
                selectQty: this.state.selectQty,
                toggleHighlight: this.toggleHighlight,
                addSelectQty: this.addSelectQty,
                decreaseSelectQty: this.decreaseSelectQty,
                addToCart: this.addToCart,
                resetCart: this.resetCart

            }}>
                {this.props.children}
            </MyContext.Provider >


        )

    }
}

export { MyContext, MyProvider }