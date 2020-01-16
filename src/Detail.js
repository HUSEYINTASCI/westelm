import React, { Component } from 'react'
import './style/Detail.scss'
import { IoIosArrowDropright } from 'react-icons/io'
import { IoIosArrowDropleft } from 'react-icons/io'
import { MdClose } from 'react-icons/md'
class detail extends Component {
    render() {
      const {
        imageUrl,
        close,
        rightclick,
        leftclick,
      } = this.props
      return (
        <div className="detail">
           <div className="detail-content">
          <MdClose className="close" onClick={close} />
          <IoIosArrowDropright
            className="nav-right"
            onClick={rightclick}
          />
          <IoIosArrowDropleft className="nav-left" onClick={leftclick} />
          <img src={imageUrl} className="detail-image" alt="detail-placeholder" />
          <div id="bubble-stepper" className="bubble-stepper">
            <div id="bubble-container" className="bubble-container" />
          </div>
        </div>
        </div>
      )
    }
  }
  
  export default detail;
  