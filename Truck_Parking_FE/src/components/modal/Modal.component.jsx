import React, { useState } from 'react';
import { connect } from 'react-redux';

import { ModalStyle } from './Modal.style';
import Icon from '../icon/icon';
import iconSet from '../icon/icon-font/facility_icon';


const Modal = ({ isOpen }) => {

  const [inputValues, setInputValues ] = useState({
    title: "",
    extra_info: "",
  })

  const [ facilities, setFacilities ] = useState({})

  const onChange = e => {
    e.preventDefault();
    const { value, name } = e.target;
    return setInputValues({
      ...inputValues,
      [name]: value
    })
  }

  
  const onClick = e => {
    const { name, checked } = e.target;
    return setFacilities({
      ...facilities,
      [name]: checked
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    const formValues = {...inputValues, facilities}
    console.log(formValues)
  }

  return(
    <ModalStyle isOpen={isOpen}>
      <form action="" onSubmit={onSubmit}>
        <label htmlFor="title">Add short title</label>
        <input type="text" id="title" name="title" placeholder="Insert title" onChange={onChange} />

        <label htmlFor="coordinates">Add coordinates</label>
        <input type="text" id="coordinates" name="coordinates" placeholder="Insert coordinates" onChange={onChange} />

        {iconSet.map(i => (
          <label htmlFor={i.name} key={i.name}>
            <Icon name={i.name} />
            <input type="checkbox" id={i.name} name={i.name} onClick={onClick} />
          </label>
        ))}

        <label htmlFor="extra_info">Add extra information</label>
        <input type="textarea" id="extra_info" name="extra_info" onChange={onChange}/>

        <button type="submit">Submit</button>
      </form>
    </ModalStyle>
  )
}

const mapStateToProps = state => ({
  isOpen: state.ModalReducer,
});
// const mapDispachToProps = dispach => ({
//   setIcon: e => dispach(setIconAction(e)),
//   setInfo: (e, formInfo) => dispach(setInfoAction(e, formInfo))
// })

export default connect(mapStateToProps)(Modal);