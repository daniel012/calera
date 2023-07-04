import * as React from 'react';
import axios from 'axios';
import { basicErrorToast,basicWarningMessage, url } from '../../utils';
import {AgentList} from  './AgentList';
import { CreateSellStyle } from'../indexClassName';


export const  AgentSearch =( props) => {
    const className = CreateSellStyle();
    const [agents, setAgents] = React.useState([]);
    React.useEffect(()=> {
      axios.get(`${url}/agent`).then((value)=> {
        if(value.data.length !== 0){
          setAgents(()=> {
            return value.data.map((ele)=> ({
                'id':ele['id'], label:ele['name']
            }))
          });
        
      } else {
          basicWarningMessage('Agentes no encontrados');
      }
      }).catch((error)=> basicErrorToast(error));
    }, []);

    if(!!props.agent){
        return (
            <div className={className.displayClient}> 
            <label>{props.agent.label}</label>
            <img alt='delete client' src="/delete.svg" onClick={()=> props.onSetAgent('')}></img>
        </div>
        );
    }
    
    return(
        <div className={`${className.testingDaniel}`}>
            <AgentList options={agents}  callback={props.onSetAgent} />
        </div>
        );
};

export default AgentSearch;