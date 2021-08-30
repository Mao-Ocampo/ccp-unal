import React from 'react'; 
import './DefinitionTitle.css';
import VisibilityIcon from '@material-ui/icons/Visibility';


export const DefinitionTitle = (props) => {

    const { titles, setInfo, info, children } = props
  
      return (
          <>
            {titles ? titles.map((title) => (
              <div className="definitionTtile" onChange={info.change}>
              <span >
                  <h3>{title.name}</h3>
              </span>
              <span className={title.className} id={title.id}>
                  {title.icon}
              </span>
                {title.children}
          </div>
            )) : ''}
          </>
      )
  }
