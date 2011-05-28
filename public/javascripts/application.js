// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

function get_sentiment(){
	result = $.post("http://apib2.semetric.com/sentiment?token=a690d6c4892111e0ba8f00163e499d92");
}