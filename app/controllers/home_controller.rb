 require 'net/http'
 
class HomeController < ApplicationController
  def index
    @feed = news_search
  end

  def fetch_url
  
  end
 def news_search(page=nil)
    
     base_url = "http://api.ihackernews.com/page"
      if page != nil
        base_url = "http://api.ihackernews.com/page/#{page}"
      end

     #url = "#{base_url}&query=#{URI.encode(query)}&results=#{results}&start=#{start}"
     url = base_url
     p "url is #{url}"
     resp = Net::HTTP.get_response(URI.parse(url))
     data = resp.body

     # we convert the returned JSON data to native Ruby
     # data structure - a hash
     begin
       result = JSON.parse(data)
     rescue
       result = []
     end
     #p result
     # if the hash has 'Error' as a key, we raise an error
     # if result.has_key? 'Error'
     #         raise "web service error"
     #      end
     return result
  end
  
  def next_page
    next_page_params = params["np"]
    @feed = news_search(next_page_params)
  end

end
