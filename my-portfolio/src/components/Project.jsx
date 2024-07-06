import React from "react";

const Project = () => {
  return (
    <div className="project-page">
      <h2>Project</h2>
      <div className="corkboard text_left">
        <div className='left_layout'>
          <div className="note text_layout">
            <div className="tape"></div>
            <h2>監視カメラの録画システム開発</h2>
            <h3>業務内容</h3>
            <p>倉庫内に設置した約60台のIPカメラ映像の録画システムの設計・開発、運用</p>
            <p>監視カメラの追加や録画状況の確認が簡易的に行えるWebの開発</p>
            <p>フレーム落ちやエラーによる録画プロセスダウン対策</p>
            <h3>使用技術</h3>
            <p>QNAP, QuTS hero</p>
            <p>フロントエンド : React, Typescript</p>
            <p>バックエンド : Python, Django</p>
            <p>録画ソフトウェア : gstreamer, opencv</p>
          </div>
          <div className="note ">
            <div className="tape"></div>
            <h2>QRコードによるイベント出席管理システムの開発</h2>
            <h3>業務内容</h3>
            <p>大学の授業やイベントの参加者各自がQRコードを読み込むと、入退室が可能になるシステムを作成</p>
            <p>イベント主催者は簡単に出席者の確認から単位発行のためのポイント付与を簡単に行えるように</p>
            <h3>使用技術</h3>
            <p>環境 : Windows Server, Docker</p>
            <p>フロントエンド : Django, Bootstrap</p>
            <p>バックエンド : Python, Django, SQL Server</p>
          </div>
        </div>
        <div className='right_layout'>
          <div className="note">
            <div className="tape"></div>
            <h2>複数台のLiDARやカメラの映像をWebから録画可能なシステムの開発</h2>
            <h3>業務内容</h3>
            <p>ROSを用いて、LiDARとカメラの映像を録画する仕組みを開発</p>
            <p>Webからセンサ電源投入・録画・停止が可能 (Webシステムはチームメンバーが開発)</p>
            <h3>使用技術</h3>
            <p>環境 : Ubuntu, Docker</p>
            <p>使用ミドルウェア : ROS1</p>
          </div>
          <div className="note">
            <div className="tape"></div>
            <h2>動物園や空港で取得したデータを可視化し分析可能なWebシステムの開発</h2>
            <h3>業務内容</h3>
            <p>人流センサやWiFiパケットセンサなどから得られた人流データを解析するためのWebUIの開発</p>
            <p>WebUIのログイン認証の開発に従事</p>
            <p>OpenStreetMap + Leafleeを用いて、データの可視化とセンサ位置の可視化</p>
            <h3>使用技術</h3>
            <p>環境 : Ubuntu, Docker</p>
            <p>フロントエンド : TypeScript, React, Webix</p>
            <p>バックエンド : Go(Gin), AWS Cognito</p>
          </div>
          <div className="note">
            <div className="tape"></div>
            <h2>企業のホームページ開発</h2>
            <h3>業務内容</h3>
            <p>Wordpressを用いて、企業のホームページのデザイン設計と開発</p>
            <h3>使用技術</h3>
            <p>環境 : VPS, CentOS</p>
            <p>使用言語 : HTML, CSS, JS, PHP, CMS(Wordpress)</p>
          </div>
        </div>

      </div>
    </div>
  ) 
};

export default Project;
