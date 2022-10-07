import Content from 'components/Content/Content'
import Header from 'components/Header/Header'
import React from 'react'

function Course(props) {
    //const { notes } = props;
    const parts = props.course.parts;
    console.log(parts)
  return (
    <div>
        <Header title= {props.course.name}></Header>
        <div>
            <Content parts={props.course.parts}></Content>
        </div>
        
    </div>
  )
}

export default Course