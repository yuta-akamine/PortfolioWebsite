<?php

include(dirname ( __FILE__ ) . '/header.html'); //ヘッダーを読み込み

?>

<div class="wrapper">

  <main>

    <section>

      <div class="row">

      <h3 class="subtitle bottomspace col-sm-2">Skills</h3>

      </div>  <!-- <div class="row"> -->

      <div class="skillsbox">

        <div class="skillslist">

          <h4>Programming Language</h4>
          <div class="skillsicon">
            <!-- https://icons8.jp/icons/set/html から画像取得 -->
            <img src="images/HTML.png" alt="" id="html" onmouseover="showSlideContent()">
            <i id="htmlExplanation"></i>
            <!-- <p>HTML</p> -->
          </div>

          <div class="skillsicon">
            <!-- https://icons8.jp/icons/set/html から画像取得 -->
            <img src="images/CSS.png" alt="" id="css" onmouseover="showSlideContent()">
            <i id="cssExplanation"></i>
            <!-- <p>CSS</p> -->
          </div>
          
          <div class="skillsicon">
            <!-- https://icons8.jp/icons/set/html から画像取得 -->
            <img src="images/JavaScript.png" alt="" id="js" onmouseover="showSlideContent()">
            <i id="jsExplanation"></i>
            <!-- <p>JavaScript</p> -->
            
          </div>
          
          <div class="skillsicon">
            <!-- https://icons8.jp/icons/set/html から画像取得 -->
            <img src="images/PHP.png" alt="" id="php" onmouseover="showSlideContent()">
            <i id="phpExplanation"></i>
            <!-- <p>PHP</p> -->
          </div>
          
          <div class="skillsicon">
            <!-- https://icons8.jp/icons/set/html から画像取得 -->
            <img src="images/Java.png" alt="" id="java" onmouseover="showSlideContent()">
            <i id="javaExplanation"></i>
            <!-- <p>Java</p> -->
          </div>
        
        </div> <!-- <div class="skillslist"> -->

        <div class="skillslist">

          <h4 class="topspace">Database</h4>
          <div class="skillsicon">
            <!-- https://icons8.jp/icons/set/html から画像取得 -->
            <img src="images/MySQL.png" alt="" id="mysql" onmouseover="showSlideContent()">
            <i id="mysqlExplanation"></i>
            <!-- <p>MySQL</p> -->
          </div>

        </div> <!-- <div class="skillslist"> -->

        <div class="skillslist">

          <h4  class="topspace">Cloud Service</h4>
          <div class="skillsicon">
            <!-- https://icons8.jp/icons/set/html から画像取得 -->
            <img src="images/Heroku.png" alt="" id="heroku" onmouseover="showSlideContent()">
            <i id="herokuExplanation"></i>
            <!-- <p>Heroku</p> -->
          </div>

        </div> <!-- <div class="skillslist"> -->

        <div class="skillslist">

          <h4  class="topspace">Development Tool</h4>
          <div class="skillsicon">
            <!-- https://icons8.jp/icons/set/html から画像取得 -->
            <img src="images/Visual Studio Code.png" alt="" id="vscode" onmouseover="showSlideContent()">
            <i id="vscodeExplanation"></i>
            <!-- <p>Visual Studio Code</p> -->
          </div>

          <div class="skillsicon">
            <!-- https://icons8.jp/icons/set/html から画像取得 -->
            <img src="images/Eclipse.png" alt="" id="eclipse" onmouseover="showSlideContent()">
            <i id="eclipseExplanation"></i>
            <!-- <p>Eclipse</p> -->
          </div>

          <div class="skillsicon">
            <!-- https://icons8.jp/icons/set/html から画像取得 -->
            <img src="images/Android Studio.png" alt="" id="android" onmouseover="showSlideContent()">
            <i id="androidExplanation"></i>
            <!-- <p>Android Studio</p> -->
          </div>

          <div class="skillsicon">
            <!-- https://icons8.jp/icons/set/html から画像取得 -->
            <img src="images/GitHub.png" alt="" id="github" onmouseover="showSlideContent()">
            <i id="githubExplanation"></i>
            <!-- <p>GitHub</p> -->
          </div>

        </div> <!-- <div class="skillslist"> -->


        <div class="skillslist">

          <h4 class="topspace">Others</h4>
          <div class="skillsicon">
            <!-- https://icons8.jp/icons/set/html から画像取得 -->
            <img src="images/Virtualbox.png" alt="" id="virtualbox" onmouseover="showSlideContent()">
            <i id="virtualboxExplanation"></i>
            <!-- <p>Virtualbox</p> -->
          </div>

          <div class="skillsicon">
            <!-- https://icons8.jp/icons/set/html から画像取得 -->
            <img src="images/VMware.png" alt="" id="vmware" onmouseover="showSlideContent()">
            <i id="vmwareExplanation"></i>
            <!-- <p>VMware</p> -->
          </div>

          <div class="skillsicon">
            <!-- https://icons8.jp/icons/set/html から画像取得 -->
            <img src="images/Slack.png" alt="" id="slack" onmouseover="showSlideContent()">
            <i id="slackExplanation"></i>
            <!-- <p>Slack</p> -->
          </div>

          <div class="skillsicon bottomspace">
            <!-- https://icons8.jp/icons/set/html から画像取得 -->
            <img src="images/Notion.png" alt="" id="notion" onmouseover="showSlideContent()">
            <i id="notionExplanation"></i>
            <!-- <p>Notion</p> -->
          </div>

        </div> <!-- <div class="skillslist"> -->
        
        
        <!-- <div id="element">要素1</div>
        <div id="tooltip">要素2</div> -->
        
        <script src="icon.js">
        </script>

      </div>  <!-- <div class="skillsbox"> -->
        
    </section>

  </main>

</div>  <!-- <div class="wrapper"> -->

<?php

include(dirname ( __FILE__ ) . '/footer.html'); //フッターを読み込み