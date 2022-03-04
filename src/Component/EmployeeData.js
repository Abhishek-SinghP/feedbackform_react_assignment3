import React from 'react';

class EmployeeData extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <>
                <h2>EMPLOYEE FEEDBACK DATA</h2>
                <div className="show-details">
                    {
                        this.props.users.map((element, index) => {
                            const { name, department, rating } = element;
                            return (
                                <span className="detail" key={index}>Name : {name} &nbsp;|&nbsp; Department : {department} &nbsp;|&nbsp; Rating : {rating}</span>
                            )
                        })
                    }
                </div>
                <button type="back" className='back-btn' onClick={this.props.content}>BACK</button>
            </>
        )
    }
}

export default EmployeeData