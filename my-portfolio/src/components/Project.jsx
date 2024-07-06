import React from "react";

const Project = () => {
  return (
    <div className="project-page">
      <h2>Project</h2>
      <div className="corkboard">
        <div className='left_layout'>
          <div className="note">
            <div className="tape"></div>
            <h2>監視カメラ録画システムの開発</h2>
            <p>倉庫内に設置した60台のカメラ映像の録画システムの設計・開発</p>
            <p>一日で数百GBの録画データの保存と録画を止めないようなエラー処理</p>
            <h3>使用技術</h3>
            <p>フロントエンド : React, Typescript</p>
            <p>バックエンド : Python, Django</p>
          </div>
          <div className="note text_left">
            <div className="tape"></div>
            <h2>QRコードによるイベント出席管理システムの開発</h2>
            <p>大学の授業やイベントにおいて単位を発行する際に、各自がQRコードを読み込むと、入退室が可能になるシステムを作成。<br />これにより</p>
            <h3>使用技術</h3>
            <p>フロントエンド : Django, Bootstrap</p>
            <p>バックエンド : Python, Django, SQL Server</p>
          </div>
        </div>
        <div className='right_layout'>
          <div className="note text_left">
            <div className="tape"></div>
            <h2>複数台のLiDARやカメラの映像をWebから録画可能なシステムの開発</h2>
            <p></p>
            <p></p>
            
          </div>
          <div className="note text_left">
            <div className="tape"></div>
            <h2>動物園や空港で取得したデータを可視化し分析可能なWebシステムの開発</h2>
            <p></p>
            <p></p>
            
          </div>
        </div>

      </div>
    </div>
  ) 
};

export default Project;
