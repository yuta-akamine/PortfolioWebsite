<?php

include(dirname ( __FILE__ ) . '/header.html'); //ヘッダーを読み込み

?>

<div class="wrapper">

  <main>

    <section>

      <div class="row">

        <h3 class="subtitle bottomspace col-sm-2">Skills</h3>

      </div>  <!-- <div class="row"> -->

      <p class="txtBox bottomspace">
        現在までに学習中のスキル一覧です。<br>
        現在は基礎的なコーディングしかできないため、今後より複雑な開発ができるよう、<br>
        知見を広げながら、現在学習中のスキルもより技術力を高めていきたいです。
      </p>

      <div class="skillsbox">

        <div class="skillslist">

          <h4>Programming Language</h4>

          <!-- https://icons8.jp/icons/set/html から画像取得 -->
          <!-- https://icons8.jp/license フリーで利用するための規約 -->

          <div class="skillsicon">
            <img src="images/HTML.png" alt="" id="html" onmouseover="showSlideContent()">
            <i id="htmlExplanation"></i>
          </div>

          <div class="skillsicon">
            <img src="images/CSS.png" alt="" id="css" onmouseover="showSlideContent()">
            <i id="cssExplanation"></i>
          </div>
          
          <div class="skillsicon">
            <img src="images/JavaScript.png" alt="" id="js" onmouseover="showSlideContent()">
            <i id="jsExplanation"></i>
          </div>
          
          <div class="skillsicon">
            <img src="images/PHP.png" alt="" id="php" onmouseover="showSlideContent()">
            <i id="phpExplanation"></i>
          </div>
          
          <div class="skillsicon">
            <img src="images/Java.png" alt="" id="java" onmouseover="showSlideContent()">
            <i id="javaExplanation"></i>
          </div>
        
        </div> <!-- <div class="skillslist"> -->

        <div class="skillslist">

          <h4 class="topspace">Database</h4>

          <div class="skillsicon">
            <img src="images/MySQL.png" alt="" id="mysql" onmouseover="showSlideContent()">
            <i id="mysqlExplanation"></i>
          </div>

        </div> <!-- <div class="skillslist"> -->

        <div class="skillslist">

          <h4  class="topspace">Cloud Service</h4>

          <div class="skillsicon">
            <img src="images/Heroku.png" alt="" id="heroku" onmouseover="showSlideContent()">
            <i id="herokuExplanation"></i>
          </div>

        </div> <!-- <div class="skillslist"> -->

        <div class="skillslist">

          <h4  class="topspace">Development Tool</h4>

          <div class="skillsicon">
            <img src="images/Visual Studio Code.png" alt="" id="vscode" onmouseover="showSlideContent()">
            <i id="vscodeExplanation"></i>
          </div>

          <div class="skillsicon">
            <img src="images/Eclipse.png" alt="" id="eclipse" onmouseover="showSlideContent()">
            <i id="eclipseExplanation"></i>
          </div>

          <div class="skillsicon">
            <img src="images/Android Studio.png" alt="" id="android" onmouseover="showSlideContent()">
            <i id="androidExplanation"></i>
          </div>

          <div class="skillsicon">
            <img src="images/GitHub.png" alt="" id="github" onmouseover="showSlideContent()">
            <i id="githubExplanation"></i>
          </div>

        </div> <!-- <div class="skillslist"> -->
          
        
        <div class="skillslist">

          <h4 class="topspace">Others</h4>
          
          <div class="skillsicon nounderline">
            <!-- https://icons8.jp/license フリーで利用するための規約 アイコンを使用する各ページにリンクを設置-->
            <a href="https://icons8.jp/" target="_blank">
              <img src="images/Virtualbox.png" alt="" id="virtualbox" onmouseover="showSlideContent()">
            </a>
            <i id="virtualboxExplanation"></i>
          </div>

          <div class="skillsicon">
            <img src="images/VMware.png" alt="" id="vmware" onmouseover="showSlideContent()">
            <i id="vmwareExplanation"></i>
          </div>

          <div class="skillsicon">
            <img src="images/Slack.png" alt="" id="slack" onmouseover="showSlideContent()">
            <i id="slackExplanation"></i>
          </div>

          <div class="skillsicon">
            <img src="images/Notion.png" alt="" id="notion" onmouseover="showSlideContent()">
            <i id="notionExplanation"></i>
          </div>

        </div> <!-- <div class="skillslist"> -->
        
        <script src="icon.js">
        </script>

      </div>  <!-- <div class="skillsbox"> -->
        
    </section>

  </main>

</div>  <!-- <div class="wrapper"> -->

<?php

include(dirname ( __FILE__ ) . '/footer.html'); //フッターを読み込み