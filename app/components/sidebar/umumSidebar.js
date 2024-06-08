import React from 'react';
import styles from './umumSidebar.module.css';

const UmumSidebar = () => {
  return (
    <div div className="animate__animated animate__slideInLeft">
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <img className={styles.frameChild} alt="" src="/images/modulUmum/frame-43.svg" />
          <div className={styles.frameChild}>
            <img className={styles.frameItem} alt="" src="/images/modulUmum/user.png" />
          </div>
          <div className={styles.frameInner} />
          <img className={styles.frameChild} alt="" src="/images/modulUmum/frame-45.svg" />
          <img className={styles.frameChild} alt="" src="/images/modulUmum/frame-46.svg" />
          <img className={styles.frameChild} alt="" src="/images/modulUmum/frame-37.svg" />
          <img className={styles.frameChild} alt="" src="/images/modulUmum/frame-47.svg" />
          <img className={styles.frameChild} alt="" src="/images/modulUmum/frame-46.svg" />
          <img className={styles.frameChild} alt="" src="/images/modulUmum/frame-49.svg" />
          <img className={styles.frameChild} alt="" src="/images/modulUmum/frame-50.svg" />
        </div>
        <div className={styles.umumParent}>
          <b className={styles.umum}>Umum</b>
          <div className={styles.iconParkeveryUserParent}>
            <img className={styles.iconParkeveryUser} alt="" src="/images/modulUmum/iconparkeveryuser.svg" />
            <div className={styles.pemesananRuang}>Pemesanan Ruang</div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.tutorialPesemesananRuangWrapper}>
              <div className={styles.tutorialPesemesananRuang}>Tutorial Pesemesanan Ruang</div>
            </div>
            <div className={styles.rectangleDiv} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.reservasiRuangRapatWrapper}>
              <div className={styles.reservasiRuangRapat}>Reservasi Ruang Rapat</div>
            </div>
            <div className={styles.frameChild7} />
          </div>
          <div className={styles.iconParkcarParent}>
            <img className={styles.iconParkeveryUser} alt="" src="/images/modulUmum/iconparkcar.svg" />
            <div className={styles.pemesananKendaraan}>Pemesanan Kendaraan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UmumSidebar;
