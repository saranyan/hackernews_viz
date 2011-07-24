 require 'net/http'
 
class HomeController < ApplicationController
  def index
    @feed,@np = news_search
    # sorted_array = feed["items"].sort {|a,b| b[1] <=> a[1]}
    #     sorted_hash = Hash[*sorted_array.collect { |v|
    #       [v[0],v[1]]
    #       }.flatten]
    
    @feed.sort! { |a,b| b["points"] <=> a["points"] }
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
       p "rescued"
       result = {"items" => [], "nextId" => '#'}
     end
     #p result
     # if the hash has 'Error' as a key, we raise an error
     # if result.has_key? 'Error'
     #         raise "web service error"
     #      end
     return result["items"],result["nextId"]
  end
  
  def next_page
    next_page_params = params["np"]
    @feed,@np = news_search(next_page_params)
     @feed.sort! { |a,b| b["points"] <=> a["points"] }
  end

end
