import React, {useRef} from "react";
import "../Filter/Filter.scss"
import {AUTHORS} from "./../../../utils/myData";
import {TAGS} from "./../../../utils/myData";
import "./Filter.scss";
import faker from 'faker';
import { TextField, Button, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Checkbox } from '@mui/material';

export function Filter(props) {
  const {setSearchText, setSearchAuthor, setSearchTags} = props;

  const inputValue = useRef('');
  const authorsForFilterRefs = useRef([]);
  const tagsForFilterRefs = useRef([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    let checkedTags = tagsForFilterRefs.current.filter(tag => tag.checked);
    if (checkedTags.length > 0) {
      setSearchTags(checkedTags.map(i => i.name))
    } else {
      setSearchTags([]);
    }

    let checkedAuthor = authorsForFilterRefs.current.filter(author => author.checked);
    if (checkedAuthor.length > 0) {
      setSearchAuthor(checkedAuthor[0].value);
    } else {
      setSearchAuthor(null);
    }
    setSearchText(inputValue.current.value);
    inputValue.current.value = '';
  }

  const handleDiscard = () => {
    inputValue.current.value = '';
    setSearchText(inputValue.current.value);
    setSearchAuthor(null);
    setSearchTags([]);
  }

  //------------------------------------------------------RETURN-------------------------------------------//

  return <div className="header__filter">
    <form className="header__filterForm"
          onSubmit={(event) => handleSubmit(event)}>
      {/*<Input color={"primary"}*/}
      {/*       className="header__filterInputForSearch"*/}
      {/*       type="text"*/}
      {/*       ref={inputValue}*/}
      {/*       style={{color: 'white'}}*/}
      {/*       placeholder="Enter text to find it!"/>*/}

      <TextField id="outlined-basic" label="Enter text to find it!" variant="outlined" color={"primary"}
                 className="header__filterInputForSearch"
                 type="text"
                 ref={inputValue}
                 size="small" style={{color: 'white'}}/>

      <Button  variant="contained"
               type='submit'
               className="header__filterButton"
               style={{color: 'white'}}>
        Search
      </Button>

      <Button  variant="contained"
               className="header__cancelFilterButton"
               onClick={handleDiscard}
               type="reset"
               style={{color: 'white'}}
      >
        Discard
      </Button>

    </form>

    <FormControl>
      <FormLabel id="demo-radio-buttons-group-label">Authors</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
        style={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        {AUTHORS.map((item, index) => {
          return <FormControlLabel
            key={faker.datatype.uuid()}
          ref={((author) => authorsForFilterRefs.current[index] = author)}
          name="author"
          value={item.name}
          control={<Radio />} label="Female" />
        })}
      </RadioGroup>
    </FormControl>
    <br/>
    <br/>
    {TAGS.map((item, index) => {
      return <label key={faker.datatype.uuid()}>
        <Checkbox type="checkbox"
                  ref={(node) => tagsForFilterRefs.current[index] = node}
                  name={item.name}/>
        {item.name}
      </label>
    })}

  </div>
}