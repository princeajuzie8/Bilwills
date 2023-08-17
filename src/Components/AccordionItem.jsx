import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AccordionContext } from '../Context/Accordwrapper';
import { MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import styled from "styled-components"



const Container = styled.div`
.accordion-item{
    .accordion-title{
        .accordion-wrapper .accordion-item h3.accordion-title {
  font-size: 1.75rem;
  margin: 0;
}

button {
  position: relative;
  display: flex;
  align-items: center;
     background: ${props => props.theme.body};
  border-radius: 1rem;
  border: none;
  font-size: 1.2rem;
  width: 100%;
  text-align: left;
  color: #ffffff;
  font-weight: bold;
  margin-top: 0.5rem;
  padding: 1rem;
}



.accordion-wrapper .accordion-item h3.accordion-title button:hover {
   cursor: pointer;
   background-color: transparent;
}

.accordion-wrapper .accordion-item h3.accordion-title button span.title-wrapper {
  display: block;
  position: relative;
  width: 100%;
}

.accordion-wrapper .accordion-item h3.accordion-title button span.icon-wrapper {
  width: 10%;
  display: flex;
  justify-content: center;
}
        .accordion-panel{




        }
    }
}
`
const AccordionItem = (props) => {

    let indexPlus;

    const indexCount = (index) => {
        indexPlus = index + 1;
        return indexPlus;
    }

    const { active, setActive } = useContext(AccordionContext)

    const eventHandler = (e, index) => {
        e.preventDefault();
        setActive(active === index ? null : index);
    }

    return (
        <Container>
            <div className="accordion-item">
                <h3 className="accordion-title">
                    <button
                        onClick={(e) => eventHandler(e, props.index)}
                        className={active === props.index ? 'active' : ''}
                        aria-expanded={active === props.index ? 'true' : 'false'}
                        aria-controls={'sect-' + indexCount(props.index)}
                        aria-disabled={active === props.index ? 'true' : 'false'}
                    >


                        <span className="title-wrapper">
                        {props.title}
                          </span>
                        <span className="icon-wrapper">
                        
                            {active === props.index ? <MdOutlineKeyboardArrowDown className='plus' /> : <MdOutlineKeyboardArrowUp  className='minus'/>}
                        </span>
                    </button>
                </h3>
                <div className="accordion-panel">
                    <div id={'sect-' + indexCount(props.index)} className={active === props.index ? 'panel-open' : 'panel-close'}>
                        {props.description}
                    </div>
                </div>
            </div>
        </Container>

    )
}

AccordionItem.propTypes = {
    index: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
}

export default AccordionItem; 