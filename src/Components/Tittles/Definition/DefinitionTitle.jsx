import React from 'react'; 
import './DefinitionTitle.css';
import VisibilityIcon from '@material-ui/icons/Visibility';


export const DefinitionTitle = (props) => {

    const { titles, setInfo, info } = props
  
    const handleChange = (event) => {
      setInfo({
        ...info,
        [event.target.name]: event.target.valu
     });
    }
      return (
          <>
            {titles ? titles.map((title) => (
              <div className="definitionTtile" onChange={handleChange}>
              <span >
                  <h3>{title.name}</h3>
              </span>
              <span className={title.className} id={title.id}>
                  {title.icon}
              </span>
          </div>
            )) : ''}
          </>
      )
  }
