import React, { Component } from 'react';

//input y tiene un boton, y cuando le das click boton
//te envia el valor del input
class AddTodo extends Component {
	constructor(props) {
		super(props);
    this.state = {
      test: ''
    };
	}

  onChange(e) {
    this.setState({
      test: e.target.value
    });
  }

  customAdd() {
    this.props.add2(this.state.test);
    this.setState({
      test: ''
    });
  }

	render() {
		// const {
			// onChange,
			// add,
      // add2
		// } = this.props;
    const {
      test
    } = this.state;
		return (
			<div>
        <input onChange={this.onChange.bind(this)} value={test} />
				<button onClick={this.customAdd.bind(this)}>Add</button>
			</div>
	    )
	}
}
// <input onChange={onChange} value={test}/>
	//<button onClick={add}>Add</button>

export default AddTodo;
