<?php

require_once("Template.php");

$page = new Template("My Page");
$page->setHeadSection("<script type='text/javascript' src='hello.js'></script>");
$page->setTopSection();
$page->setBottomSection();

print $page->getTopSection();
print "<h1>Some page-specific HTML goes here</h1>\n";
print $page->getBottomSection();

