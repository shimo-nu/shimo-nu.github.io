// src/components/AboutMe.js
import React, { useEffect } from 'react';

const AboutMe = () => {
    useEffect(() => {
        const notes = document.querySelectorAll('.note');
        notes.forEach((note, index) => {
            setTimeout(() => {
                note.style.opacity = '1';
                note.style.transform = 'rotate(0deg)';
                note.style.animation = 'fadeIn 1s';
            }, index * 700);
        });
    }, []);
    return (
        <div className="corkboard">
            <div className="note">
                <div className="tape"></div>
                <h2>About Me</h2>
                <p>名古屋大学河口研で自律移動ロボットに関する研究を行っています。</p>
            </div>
            <div className="note text_left">
                <div className="tape"></div>
                <h2>学歴</h2>
                <p>2020.3 信州大学 工学部 電子情報システム工学科 卒業</p>
                <p>2020.4 名古屋大学大学院 工学研究科 情報・通信工学専攻 入学</p>
            </div>
            <div className="note">
                <div className="tape"></div>
                <h2>資格</h2>
                <p>JDLA Deep Learning for ENGINEER (E資格)</p>
            </div>
            <div className="note">
                <div className="tape"></div>
                <h2>スキル</h2>
                <h3>ロボット開発</h3>
                <p>ROS, Gazebo, Python, C++</p>
                <h3>Web開発</h3>
                <p>HTML, CSS, JavaScript, React, Django</p>
                <h3>その他</h3>
                <p>Go, SQL</p>
            </div>
         
            <div className="note text_left">
                <div className="tape"></div>
                <h2>出版物</h2>
                <p>Shimosato, H., Hayashida, N., Urano, K., Yonezawa, T., & Kawaguchi, N. (2023). XR Communication System for Remote Control Wheelchairs. In Proceedings of the 12th International Conference on the Internet of Things (pp. 219–223). Association for Computing Machinery.</p>
                <hr/>
                <p>盛下 泰暉, 相川 雄也, Ajanth Kumarakuruparan, 下里 浩昇, 浅井 悠佑, 浦野 健太 4WD/4WS ロボットとAutoware.universeを用いた屋外自律走行実験, つくばシンポジウム 2022、2022年12月</p>
                <hr/>
                <p>Hayashida, N., Shimosato, H., Urano, K., Yonezawa, T., Kawaguchi, N. (2023). Mobility Link XR: Interspace Interaction System in Electric Wheelchair. In: Stephanidis, C., Antona, M., Ntoa, S., Salvendy, G. (eds) HCI International 2023 Posters. HCII 2023. Communications in Computer and Information Science, vol 1833. Springer, Cham.</p>
                <hr/>
                <p>下里 浩昇，片山 晋，浦野 健太，米澤 拓郎，河口 信夫, LiDARの視野を考慮した能動的な人流計測手法の検討, 第51回可視化情報シンポジウム 2023年08月</p>
                <hr/>
                <p>Keisuke Higashiura, Kodai Yokoyama, Yusuke Asai, Hironori Shimosato, Kazuma Kano, Shin Katayama, Kenta Urano, Takuro Yonezawa, Nobuo Kawaguchi, Semi-Automated Framework for Digitalizing Multi-Product Warehouses with Large Scale Camera Arrays, The 22nd IEEE International Conference on Pervasive Computing and Communications (PerCom 2024)</p>
            </div>
            <div className="note">
                <div className="tape"></div>
                <h2>趣味</h2>
                <p>ライブ鑑賞</p>
                <p>テニス</p>
            </div>
        </div>
    );
};

export default AboutMe;
