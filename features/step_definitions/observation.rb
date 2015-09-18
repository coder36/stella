When(/^I click on '(.*)'$/) do |link|
  click_on snake_case(link)
end

Then(/^I should see my current bill$/) do
end

Given(/^I am viewing the homepage$/) do
  visit '/index.html'
end


And(/^I wait$/) do
  sleep 10000
end

def snake_case str
  str.downcase.gsub( / /, '_')
end