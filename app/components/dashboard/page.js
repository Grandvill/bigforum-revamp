'use client';
//app/components/dashboard/page.js
import UserCardContainer from '../card/user-card-container';
import HeaderIcon from '../header/header-icon';
import styles from './Dasboard.module.css';
import NavbarMenu from '../navbar/Navbar';
import SidebarMenu from '../sidebar/page';
import EventComing from '../article/upcomingEvent/page';
import TodayArticle from '../article/todayArticle/page';
import TodayMoment from '../article/todayMoment/page';
import 'animate.css';
import { Fragment } from 'react';

const Dashboard = () => {
  const handleVideoInput = (event) => {
    const files = event.target.files;

    // Do something with the files, such as uploading them to a server.
  };

  const handleEventInput = (event) => {
    const files = event.target.files;

    // Do something with the files, such as uploading them to a server.
  };
  const handleFileInput = (event) => {
    const files = event.target.files;

    // Do something with the files, such as uploading them to a server.
  };

  const handleFileInput2 = (event) => {
    const files = event.target.files;

    // Do something with the files, such as uploading them to a server.
  };

  return (
    <>
      <div>
        <div className={styles.home}>
          <NavbarMenu />

          <SidebarMenu />

          <div className="animate__animated animate__bounceInRight">
            <TodayArticle />

            <TodayMoment />
          </div>

          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild} />

            <div className={styles.rectangleContainer}>
              <img className={styles.rectangleIcon} alt="" src="/images/dasboardImages/rectangle-17@2x.png" />

              <div className={styles.whatsOnYourMindWrapper}>
                <input type="text" className={styles.whatsOnYourInput} placeholder="What’s on your mind?" />

                <input id="fileInput" type="file" onChange={handleFileInput} style={{ display: 'none' }} />
              </div>
            </div>

            <div className={styles.frameParent1}>
              <div className={styles.bicardImageParent}>
                <img className={styles.bicardImageIcon} alt="" src="/images/dasboardImages/bicardimage.svg" />

                <label htmlFor="fileInput">
                  <div className={styles.photo}>Photo</div>
                </label>
              </div>

              <div className={styles.bicardImageParent}>
                <img className={styles.bicardImageIcon} alt="" src="/images/dasboardImages/entypovideo.svg" />

                <label htmlFor="videoInput">
                  <div className={styles.photo}>Video</div>
                </label>

                <input id="videoInput" type="file" onChange={handleVideoInput} style={{ display: 'none' }} accept="video/mp4, video/x-m4v, video/*" />
              </div>

              <div className={styles.bicardImageParent}>
                <img className={styles.bicardImageIcon} alt="" src="/images/dasboardImages/icbaselineevent.svg" />

                <label htmlFor="eventInput">
                  <div className={styles.photo}>Event</div>
                </label>
              </div>

              <div className={styles.bicardImageParent}>
                <img className={styles.bicardImageIcon} alt="" src="/images/dasboardImages/antdesignfiletextfilled.svg" />

                <label htmlFor="fileInput2">
                  <div className={styles.photo}>File</div>
                </label>

                <input id="fileInput2" type="file" onChange={handleFileInput2} style={{ display: 'none' }} accept=".pdf, .doc, .docx, .xls, .xlsx, .ppt, .pptx" />
              </div>
            </div>
          </div>
          <div className={styles.homeChild} />
          <div className={styles.groupParent}>
            <UserCardContainer profileId="/images/dasboardImages/rectangle-17@2x.png" userName="Michelle Dewi" index={0} />
            <UserCardContainer profileId="/images/avatars/avatar.jpg" userName="John Doe" index={1} />
            <UserCardContainer profileId="/images/dasboardImages/rectangle-17@2x.png" userName="Budi Doremi" index={2} />
          </div>
          <div className={styles.groupDiv}>
            <div className={styles.groupItem} />
            <div className={styles.shapeWithTextParent} style={{ marginLeft: 250, marginTop: 7 }}>
              <div className={styles.shapeWithText} />
              <div className={styles.pending}>Pending</div>
            </div>
            <img className={styles.ggloadbarDocIcon} alt="" src="/images/dasboardImages/ggloadbardoc.svg" />
            <img className={styles.carboncloseIcon} alt="" src="/images/dasboardImages/carbonclose.svg" />
            <div className={styles.requestCutiContainer}>
              <span className={styles.requestCuti}>{`Request cuti `}</span>
              <span>masih dalam tahap review.</span>
            </div>
          </div>
          <div className="animate__animated animate__bounceInRight">
            <EventComing />
          </div>
          <HeaderIcon />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
