import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation'; // Menggunakan usePathname dari next/navigation
import styles from './menuSidebar.module.css';

const MenuSidebar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Retrieve the active menu from localStorage on component mount
    const savedActiveMenu = localStorage.getItem('activeMenu');
    if (savedActiveMenu) {
      setActiveMenu(savedActiveMenu);
    }

    const handleRouteChange = (url) => {
      if (url === '/' || url === '/pages/dashboard') {
        // Sesuaikan dengan path home/dashboard yang benar
        setActiveMenu(null);
        localStorage.removeItem('activeMenu');
      } else {
        const menu = localStorage.getItem('activeMenu');
        if (menu) {
          setActiveMenu(menu);
        }
      }
    };

    // Handle the initial load
    handleRouteChange(pathname);

    // Cleanup function for unmounting
    return () => {};
  }, [pathname]);

  const handleMenuClick = (menu, path) => {
    setActiveMenu(menu);
    // Save the active menu to localStorage
    localStorage.setItem('activeMenu', menu);
    // Navigate to the specified path
    router.push(path);
  };

  return (
    <>
      <div className="animate__animated animate__slideInLeft">
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
            <b className={styles.umum} style={{ padding: '10px' }}>
              Menu
            </b>
            <div className={`${styles.menuItem} ${activeMenu === 'profil' ? styles.activeMenu : ''}`} onClick={() => handleMenuClick('profil', '/pages/menu/profil/')}>
              <img className={styles.iconParkeveryUser} alt="" src="/images/modulMenu/book.png" />
              <div className={styles.pemesananRuang}>Profil</div>
            </div>
            <div className={`${styles.menuItem} ${activeMenu === 'direktorat' ? styles.activeMenu : ''}`} onClick={() => handleMenuClick('direktorat', '/pages/menu/direktorat/')}>
              <img className={styles.iconParkeveryUser} alt="" src="/images/modulMenu/building-three.png" />
              <div className={styles.pemesananKendaraan}>Direktorat</div>
            </div>
            <div className={`${styles.menuItem} ${activeMenu === 'galeri' ? styles.activeMenu : ''}`} onClick={() => handleMenuClick('galeri', '/pages/menu/galeri/')}>
              <img className={styles.iconParkeveryUser} alt="" src="/images/modulMenu/picture-album.png" />
              <div className={styles.pemesananKendaraan}>Galeri</div>
            </div>
            <div className={`${styles.menuItem} ${activeMenu === 'dokumen' ? styles.activeMenu : ''}`} onClick={() => handleMenuClick('dokumen', '/pages/menu/dokumen/')}>
              <img className={styles.iconParkeveryUser} alt="" src="/images/modulMenu/document-folder.png" />
              <div className={styles.pemesananKendaraan}>Dokumen</div>
            </div>
            <div className={`${styles.menuItem} ${activeMenu === 'event' ? styles.activeMenu : ''}`} onClick={() => handleMenuClick('event', '/pages/menu/event/')}>
              <img className={styles.iconParkeveryUser} alt="" src="/images/modulMenu/calendar-three.png" />
              <div className={styles.pemesananKendaraan}>Event</div>
            </div>
            <div className={`${styles.menuItem} ${activeMenu === 'extension' ? styles.activeMenu : ''}`} onClick={() => handleMenuClick('extension', '/pages/menu/extension/')}>
              <img className={styles.iconParkeveryUser} alt="" src="/images/modulMenu/phone-call.png" />
              <div className={styles.pemesananKendaraan}>Extension</div>
            </div>
            <div className={`${styles.menuItem} ${activeMenu === 'peraturan' ? styles.activeMenu : ''}`} onClick={() => handleMenuClick('peraturan', '/pages/menu/peraturan/')}>
              <img className={styles.iconParkeveryUser} alt="" src="/images/modulMenu/notebook-and-pen.png" />
              <div className={styles.pemesananKendaraan}>Peraturan Perusahaan</div>
            </div>
            <div className={`${styles.menuItem} ${activeMenu === 'ess' ? styles.activeMenu : ''}`} onClick={() => handleMenuClick('ess', '/pages/menu/ess/')}>
              <img className={styles.iconParkeveryUser} alt="" src="/images/modulMenu/compass-one.png" />
              <div className={styles.pemesananKendaraan}>ESS</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent2}>
          <div className={styles.privacyParent}>
            <div className={styles.whatsOnYour}>Privacy</div>
            <div className={styles.whatsOnYour}>•</div>
            <div className={styles.whatsOnYour}>Terms</div>
            <div className={styles.whatsOnYour}>•</div>
            <div className={styles.whatsOnYour}>Language</div>
          </div>
          <div className={styles.copyright2022Container}>
            <p className={styles.allRightReserved}>Copyright © 2022</p>
            <p className={styles.allRightReserved}>All Right Reserved by Bisnis Indonesia Group</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuSidebar;
