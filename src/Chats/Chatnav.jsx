import styled from 'styled-components'
import { RiRecordCircleFill } from 'react-icons/ri';
import User2 from "../Resources/Images/userst.jpg";
import { RiPhoneLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { RiSearchLine } from "react-icons/ri";
import { RiVidiconLine } from "react-icons/ri";
import { RiUser2Line } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import { useChatContext } from '../Context/ChatContext';
const Container = styled.div`
*{
    margin: 0;
    padding: 0;

}
    .general{
         border-bottom: 1px solid ${props => props.theme.border};
        .main{
            margin: 0px 20px 0px 20px;
          height: 87px;
            width: auto;
             background: ${props => props.theme.body3};
            
             display: flex;
             align-items: center;
             justify-content: space-between;
             .user{
                display: flex;
                align-items: center;
                gap: 10px;
                .image{
                    margin-top: 5px;
                    img{
                        object-fit: cover;
                        height: 36px;
                          width: 36px;
                           border-radius: 50%;
                    }
                }
                .username{
                    display: flex;
                    align-items: center;
                  gap: 4px;
                    h5{
                        font-size: 15px;
                     color: ${props => props.theme.text};
                     font-weight: 700;
                     cursor: pointer;
                    }
                    .icon{
                       margin-top: 5px;
                         font-size: 11px !important;
                         color: #06D69F;
                    }
                }
             }
             .options{
                ul{
                    display: flex;
                    align-items: center;
                    gap: 28px;
                    a{
                        text-decoration: none;
                        li{
                            list-style: none;
                         color: ${({ theme }) => theme.iconcolor};
                           cursor: pointer;
                            font-size: 20px;
                          
                        }
                         
                        
                    }
                }
             }
        }
    }
`
const Chatnav = () => {
    const {data} = useChatContext()
  return (
    <Container>
          <div className="general">
              <div className="main">
                  <div className="user">
                      <div className="image">
                          <img src={data.users?.photoURL} alt="" />
                      </div>
                      <div className="username">
                          <h5>{data.users?.displayName}</h5>
                          <div className="icon">
                              <RiRecordCircleFill />
                      </div>
                      </div>
                  </div>
                  <div className="options">
                      <ul>
                          <Link to=""><li><RiSearchLine /></li></Link> 
                          <Link to=""><li><RiPhoneLine /></li></Link> 
                          <Link to=""><li><RiVidiconLine /></li></Link> 
                          <Link to=""><li><RiUser2Line /></li></Link> 
                          <Link to=""><li><BsThreeDots /></li></Link> 
                      </ul>
                  </div>
              </div>

    </div>
          
      
    </Container>
  )
}

export default Chatnav

