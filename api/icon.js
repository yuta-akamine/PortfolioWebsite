// html
const html = document.getElementById("html");
const htmltooltip = document.getElementById("htmlExplanation");

// css
const css = document.getElementById("css");
const csstooltip = document.getElementById("cssExplanation");

// JavaScript
const js = document.getElementById("js");
const jstooltip = document.getElementById("jsExplanation");

// PHP
const php = document.getElementById("php");
const phptooltip = document.getElementById("phpExplanation");

// Java
const java = document.getElementById("java");
const javatooltip = document.getElementById("javaExplanation");

// MySQL
const mysql = document.getElementById("mysql");
const mysqltooltip = document.getElementById("mysqlExplanation");

// Heroku
const heroku = document.getElementById("heroku");
const herokutooltip = document.getElementById("herokuExplanation");

// VSCode
const vscode = document.getElementById("vscode");
const vscodetooltip = document.getElementById("vscodeExplanation");

// Eclipse
const eclipse = document.getElementById("eclipse");
const eclipsetooltip = document.getElementById("eclipseExplanation");

// Android Studio
const android = document.getElementById("android");
const androidtooltip = document.getElementById("androidExplanation");

// GitHub
const github = document.getElementById("github");
const githubtooltip = document.getElementById("githubExplanation");

// virtualbox
const virtualbox = document.getElementById("virtualbox");
const virtualboxtooltip = document.getElementById("virtualboxExplanation");

// VMware
const vmware = document.getElementById("vmware");
const vmwaretooltip = document.getElementById("vmwareExplanation");

// slack
const slack = document.getElementById("slack");
const slacktooltip = document.getElementById("slackExplanation");

// notion
const notion = document.getElementById("notion");
const notiontooltip = document.getElementById("notionExplanation");

// マウスホバー時のイベントリスナーを追加

// html
html.addEventListener("mouseover", htmlshowTooltip);
html.addEventListener("mouseout", hideTooltip);

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
function htmlshowTooltip(event) {
  // マウスの位置にツールチップを表示
  htmltooltip.style.display = "inline";  // html
  // tooltip.style.top = (event.clientY + 20) + "px";
  // tooltip.style.left = (event.clientX + 20) + "px";

  // 説明文をセット
  htmltooltip.innerText = "HTML5";  // html
}

// ツールチップを表示する関数(css)
function cssshowTooltip(event) {
  // マウスの位置にツールチップを表示
  csstooltip.style.display = "inline";
  csstooltip.innerText = "CSS3";
}

// ツールチップを表示する関数(JavaScript)
function jsshowTooltip(event) {
  // マウスの位置にツールチップを表示
  jstooltip.style.display = "inline";
  jstooltip.innerText = "JavaScript";
}

// ツールチップを表示する関数(PHP)
function phpshowTooltip(event) {
  // マウスの位置にツールチップを表示
  phptooltip.style.display = "inline";
  phptooltip.innerText = "PHP";
}

// ツールチップを表示する関数(Java)
function javashowTooltip(event) {
  // マウスの位置にツールチップを表示
  javatooltip.style.display = "inline";
  javatooltip.innerText = "Java";
}

// ツールチップを表示する関数(MySQL)
function mysqlshowTooltip(event) {
  // マウスの位置にツールチップを表示
  mysqltooltip.style.display = "inline";
  mysqltooltip.innerText = "MySQL";
}

// ツールチップを表示する関数(Heroku)
function herokushowTooltip(event) {
  // マウスの位置にツールチップを表示
  herokutooltip.style.display = "inline";
  herokutooltip.innerText = "Heroku";
}

// ツールチップを表示する関数(Visual Studio Code)
function vscodeshowTooltip(event) {
  // マウスの位置にツールチップを表示
  vscodetooltip.style.display = "inline";
  vscodetooltip.innerText = "Visual Studio Code";
}

// ツールチップを表示する関数(Heroku)
function herokushowTooltip(event) {
  // マウスの位置にツールチップを表示
  herokutooltip.style.display = "inline";
  herokutooltip.innerText = "Heroku";
}

// ツールチップを表示する関数(Eclipse)
function eclipseshowTooltip(event) {
  // マウスの位置にツールチップを表示
  eclipsetooltip.style.display = "inline";
  eclipsetooltip.innerText = "Eclipse";
}

// ツールチップを表示する関数(Android)
function androidshowTooltip(event) {
  // マウスの位置にツールチップを表示
  androidtooltip.style.display = "inline";
  androidtooltip.innerText = "Android Studio";
}

// ツールチップを表示する関数(GitHub)
function githubshowTooltip(event) {
  // マウスの位置にツールチップを表示
  githubtooltip.style.display = "inline";
  githubtooltip.innerText = "GitHub";
}

// ツールチップを表示する関数(virtualbox)
function virtualboxshowTooltip(event) {
  // マウスの位置にツールチップを表示
  virtualboxtooltip.style.display = "inline";
  virtualboxtooltip.innerText = "Virtualbox";
}

// ツールチップを表示する関数(vmware)
function vmwareshowTooltip(event) {
  // マウスの位置にツールチップを表示
  vmwaretooltip.style.display = "inline";
  vmwaretooltip.innerText = "VMware";
}

// ツールチップを表示する関数(Slack)
function slackshowTooltip(event) {
  // マウスの位置にツールチップを表示
  slacktooltip.style.display = "inline";
  slacktooltip.innerText = "Slack";
}

// ツールチップを表示する関数(Notion)
function notionshowTooltip(event) {
  // マウスの位置にツールチップを表示
  notiontooltip.style.display = "inline";
  notiontooltip.innerText = "Notion";
}

// ツールチップを非表示にする関数
function hideTooltip() {
  // html
  htmltooltip.style.display = "none";  // html
  csstooltip.style.display = "none";  // CSS
  jstooltip.style.display = "none";  // JavaScript
  phptooltip.style.display = "none";  // php
  javatooltip.style.display = "none";  // Java
  mysqltooltip.style.display = "none";  // MySQL
  herokutooltip.style.display = "none";  // Heroku
  vscodetooltip.style.display = "none";  // VSCode
  eclipsetooltip.style.display = "none";  // Eclipse
  androidtooltip.style.display = "none";  // Android
  githubtooltip.style.display = "none";  // github
  virtualboxtooltip.style.display = "none";  // virtualbox
  vmwaretooltip.style.display = "none";  // vmware
  slacktooltip.style.display = "none";  // Slack
  notiontooltip.style.display = "none";  // Notion
}
