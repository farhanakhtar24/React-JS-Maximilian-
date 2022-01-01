import React from 'react';
import Button from '../Button/Button';
import classes from './Form.module.css';
import InputDiv from './InputDiv';



const Form = function (props) {
    return (
        <div className={ classes.MainFormDiv }>
            <form>
                { props.InputArray.map(listlabel => {
                    return (
                        <InputDiv>{ listlabel }</InputDiv>
                    );
                })
                }
            </form>
            <Button>Add User</Button>
        </div>
    );
}

export default Form;