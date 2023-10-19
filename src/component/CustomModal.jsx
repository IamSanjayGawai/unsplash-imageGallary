import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const CustomModal = ({ id, setShowPopup }) => {
  const photos = useSelector((state) => state.imageReducer.photos);
  const isDarkMode = useSelector((state) => state.imageReducer.isDarkMode)

  // Find the photo with the matching id
  const photo = photos.find((ele) => ele.id === id);

  console.log("photo", photo);

  return (
    <>

      <div className={`container-fluid`}>

        <ModalBackGround className="modalBackground row">
          {/* modal dark mode */}
          <ModalContainer className={`modalContainer col-10  col-sm-10 col-lg-10 col-xl-8  ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <CloseButton className="close-btn" onClick={() => setShowPopup(false)}>
              <i class={`fa-solid fa-xmark  ${isDarkMode ? 'dark-mode' : 'light-mode'}`}></i>
            </CloseButton>
            {photo ? (
              <div >
                <img src={photo.urls.regular} alt={photo.alt_description} style={{ width: '100%', height: '30rem' }} />
                {/* modal dark mode */}
                <div className={`d-flex p-2 border justify-content-between justify-content-center align-items-center bx-shadow1 ${isDarkMode ? 'dark-mode' : 'light-mode'}`} style={{ width: '100%', height: '5rem' }}>
                  <div className="d-flex  align-items-center " style={{ width: '50%', height: '100%' }}>
                    <img
                      src={photo.user.profile_image.small}
                      alt={photo.user.name}
                      style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                    />

                    <div className="d-flex flex-column mx-2 ">
                      <h6 className="m-0">{photo.user.name}</h6>
                      <span>@{photo.user.username}</span>
                    </div>


                  </div>
                  <buuton className='btn btn-success'><i class="fa-solid fa-download"></i></buuton>
                  <p><i class="fa-regular fa-thumbs-up me-2"></i>{photo.likes}</p>

                </div>

              </div>
            ) : (
              <p>Photo not found.</p>
            )}
          </ModalContainer>
        </ModalBackGround>
      </div>

    </>
  );
};

export default CustomModal;

const ModalBackGround = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
  opacity: 1;
`;

const ModalContainer = styled.div`
  box-shadow: 0px 0px 0px #888;
  padding: 10px;
  border-radius: 10px;

`;

const CloseButton = styled.button`
  position: relative;
  top: 0;
  left: 95%;
  border: none;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
  color: #000;
`;