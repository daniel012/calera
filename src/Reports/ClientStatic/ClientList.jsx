import React, { useCallback } from 'react';
import {
  Typeahead,
  Highlighter,
  Menu,
  MenuItem,
} from 'react-bootstrap-typeahead';
import List from '@segment/react-tiny-virtual-list';

import 'react-bootstrap-typeahead/css/Typeahead.css';

export const ClientList = (props) => {
  const renderMenu = useCallback((results, menuProps, props) => {
    const itemHeight = 32;
    return (
      <Menu {...menuProps}
      style={{backgroundColor:'white', width:'500px', textAlign:'left', position:'relative'}}
      >
        {results.length > 0 && <List
          scrollToIndex={props.activeIndex || 0}
          scrollToAlignment="auto"
          height={results.length < 5 ? results.length * itemHeight : 300}
          style={{textDecoration:'none', position:'relative'}}
          itemCount={results.length}
          itemSize={itemHeight}
          renderItem={({ index, style }) => {
            const item = results[index];
            return (
              <MenuItem key={item} option={item} position={index} style={{...style, color: 'black', textDecoration:'none'}}>
                <Highlighter search={props.text}>{item.label}</Highlighter>
              </MenuItem>
            );
          }}
        />}
      </Menu>
    );
  });
  return (
    <Typeahead
      maxResults={10}
      options={props.options}
      paginate={false}
      placeholder="Seleccione un cliente"
      renderMenu={renderMenu}
      onChange={(event)=>{props.callback(event[0])}}
    />
  );
};
