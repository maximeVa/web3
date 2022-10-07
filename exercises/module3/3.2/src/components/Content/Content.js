import Part from "components/Part/Part"

const Content = (props) => {

    return (
      <div>
        {props.parts.map(part => 
                        <Part part={part.name} ex={part.exercises}></Part>
                )}
      </div>
    )
  }
  
  export default Content