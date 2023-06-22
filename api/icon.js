// Strict Mode
'use strict';

// html
const html = document.getElementById("html"); //imgタグ取得
const htmlTooltip = document.getElementById("htmlExplanation"); //説明用タグ取得

// css
const css = document.getElementById("css");
const cssTooltip = document.getElementById("cssExplanation");

// JavaScript
const js = document.getElementById("js");
const jsTooltip = document.getElementById("jsExplanation");

// PHP
const php = document.getElementById("php");
const phpTooltip = document.getElementById("phpExplanation");

// Java
const java = document.getElementById("java");
const javaTooltip = document.getElementById("javaExplanation");

// MySQL
const mysql = document.getElementById("mysql");
const mysqlTooltip = document.getElementById("mysqlExplanation");

// Heroku
const heroku = document.getElementById("heroku");
const herokuTooltip = document.getElementById("herokuExplanation");

// VSCode
const vscode = document.getElementById("vscode");
const vscodeTooltip = document.getElementById("vscodeExplanation");

// Eclipse
const eclipse = document.getElementById("eclipse");
const eclipseTooltip = document.getElementById("eclipseExplanation");

// Android Studio
const android = document.getElementById("android");
const androidTooltip = document.getElementById("androidExplanation");

// GitHub
const github = document.getElementById("github");
const githubTooltip = document.getElementById("githubExplanation");

// virtualbox
const virtualbox = document.getElementById("virtualbox");
const virtualboxTooltip = document.getElementById("virtualboxExplanation");

// VMware
const vmware = document.getElementById("vmware");
const vmwareTooltip = document.getElementById("vmwareExplanation");

// slack
const slack = document.getElementById("slack");
const slackTooltip = document.getElementById("slackExplanation");

// notion
const notion = document.getElementById("notion");
const notionTooltip = document.getElementById("notionExplanation");


// マウスホバー時のイベントリスナーを追加
// html
html.addEventListener("mouseover", htmlshowTooltip); //imgタグにマウスホバー時
html.addEventListener("mouseout", hideTooltip); //imgタグからマウスホバー解除時

// css
css.addEventListener("mouseover", cssshowTooltip);
css.addEventListener("mouseout", hideTooltip);

// JavaScript
js.addEventListener("mouseover", jsshowTooltip);
js.addEventListener("mouseout", hideTooltip);

// PHP
php.addEventListener("mouseover", phpshowTooltip);
php.addEventListener("mouseout", hideTooltip);

// Java
java.addEventListener("mouseover", javashowTooltip);
java.addEventListener("mouseout", hideTooltip);

// MySQL
mysql.addEventListener("mouseover", mysqlshowTooltip);
mysql.addEventListener("mouseout", hideTooltip);

// Heroku
heroku.addEventListener("mouseover", herokushowTooltip);
heroku.addEventListener("mouseout", hideTooltip);

// VSCode
vscode.addEventListener("mouseover", vscodeshowTooltip);
vscode.addEventListener("mouseout", hideTooltip);

// Eclipse
eclipse.addEventListener("mouseover", eclipseshowTooltip);
eclipse.addEventListener("mouseout", hideTooltip);

// AndroidStudio
android.addEventListener("mouseover", androidshowTooltip);
android.addEventListener("mouseout", hideTooltip);

// GitHub
github.addEventListener("mouseover", githubshowTooltip);
github.addEventListener("mouseout", hideTooltip);

// virtualbox
virtualbox.addEventListener("mouseover", virtualboxshowTooltip);
virtualbox.addEventListener("mouseout", hideTooltip);

// vmware
vmware.addEventListener("mouseover", vmwareshowTooltip);
vmware.addEventListener("mouseout", hideTooltip);

// Slack
slack.addEventListener("mouseover", slackshowTooltip);
slack.addEventListener("mouseout", hideTooltip);

// Notion
notion.addEventListener("mouseover", notionshowTooltip);
notion.addEventListener("mouseout", hideTooltip);

// ツールチップを表示する関数(html)
function htmlshowTooltip(event) { //マウスホバー時の処理
  // マウスの位置にツールチップを表示
  htmlTooltip.style.display = "inline";  // html
  // tooltip.style.top = (event.clientY + 20) + "px";
  // tooltip.style.left = (event.clientX + 20) + "px";

  // 説明文をセット
  htmlTooltip.innerText = "HTML5";  //htmlの説明文
}

// ツールチップを表示する関数(css)
function cssshowTooltip(event) {
  // マウスの位置にツールチップを表示
  cssTooltip.style.display = "inline";
  cssTooltip.innerText = "CSS3";
}

// ツールチップを表示する関数(JavaScript)
function jsshowTooltip(event) {
  // マウスの位置にツールチップを表示
  jsTooltip.style.display = "inline";
  jsTooltip.innerText = "JavaScript";
}

// ツールチップを表示する関数(PHP)
function phpshowTooltip(event) {
  // マウスの位置にツールチップを表示
  phpTooltip.style.display = "inline";
  phpTooltip.innerText = "PHP";
}

// ツールチップを表示する関数(Java)
function javashowTooltip(event) {
  // マウスの位置にツールチップを表示
  javaTooltip.style.display = "inline";
  javaTooltip.innerText = "Java";
}

// ツールチップを表示する関数(MySQL)
function mysqlshowTooltip(event) {
  // マウスの位置にツールチップを表示
  mysqlTooltip.style.display = "inline";
  mysqlTooltip.innerText = "MySQL";
}

// ツールチップを表示する関数(Heroku)
function herokushowTooltip(event) {
  // マウスの位置にツールチップを表示
  herokuTooltip.style.display = "inline";
  herokuTooltip.innerText = "Heroku";
}

// ツールチップを表示する関数(Visual Studio Code)
function vscodeshowTooltip(event) {
  // マウスの位置にツールチップを表示
  vscodeTooltip.style.display = "inline";
  vscodeTooltip.innerText = "Visual Studio Code";
}

// ツールチップを表示する関数(Heroku)
function herokushowTooltip(event) {
  // マウスの位置にツールチップを表示
  herokuTooltip.style.display = "inline";
  herokuTooltip.innerText = "Heroku";
}

// ツールチップを表示する関数(Eclipse)
function eclipseshowTooltip(event) {
  // マウスの位置にツールチップを表示
  eclipseTooltip.style.display = "inline";
  eclipseTooltip.innerText = "Eclipse";
}

// ツールチップを表示する関数(Android)
function androidshowTooltip(event) {
  // マウスの位置にツールチップを表示
  androidTooltip.style.display = "inline";
  androidTooltip.innerText = "Android Studio";
}

// ツールチップを表示する関数(GitHub)
function githubshowTooltip(event) {
  // マウスの位置にツールチップを表示
  githubTooltip.style.display = "inline";
  githubTooltip.innerText = "GitHub";
}

// ツールチップを表示する関数(virtualbox)
function virtualboxshowTooltip(event) {
  // マウスの位置にツールチップを表示
  virtualboxTooltip.style.display = "inline";
  virtualboxTooltip.innerText = "Virtualbox";
}

// ツールチップを表示する関数(vmware)
function vmwareshowTooltip(event) {
  // マウスの位置にツールチップを表示
  vmwareTooltip.style.display = "inline";
  vmwareTooltip.innerText = "VMware";
}

// ツールチップを表示する関数(Slack)
function slackshowTooltip(event) {
  // マウスの位置にツールチップを表示
  slackTooltip.style.display = "inline";
  slackTooltip.innerText = "Slack";
}

// ツールチップを表示する関数(Notion)
function notionshowTooltip(event) {
  // マウスの位置にツールチップを表示
  notionTooltip.style.display = "inline";
  notionTooltip.innerText = "Notion";
}

// ツールチップを非表示にする関数
function hideTooltip() { //ホバー解除時
  htmlTooltip.style.display = "none";  // html
  cssTooltip.style.display = "none";  // CSS
  jsTooltip.style.display = "none";  // JavaScript
  phpTooltip.style.display = "none";  // php
  javaTooltip.style.display = "none";  // Java
  mysqlTooltip.style.display = "none";  // MySQL
  herokuTooltip.style.display = "none";  // Heroku
  vscodeTooltip.style.display = "none";  // VSCode
  eclipseTooltip.style.display = "none";  // Eclipse
  androidTooltip.style.display = "none";  // Android
  githubTooltip.style.display = "none";  // github
  virtualboxTooltip.style.display = "none";  // virtualbox
  vmwareTooltip.style.display = "none";  // vmware
  slackTooltip.style.display = "none";  // Slack
  notionTooltip.style.display = "none";  // Notion
}
