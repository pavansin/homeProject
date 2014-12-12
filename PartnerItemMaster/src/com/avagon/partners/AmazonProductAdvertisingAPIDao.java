package com.avagon.partners;
import java.util.HashMap;
import java.util.Map;
import org.springframework.web.client.RestTemplate;

public class AmazonProductAdvertisingAPIDao {
	
	private static final String endpoint = "webservices.amazon.com";
	private static final String AWSAccessKeyId="AKIAJGMJEKBOZGAARBUQ";
	private static final String		AWSSecretKey="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";
	private SignedRequestsHelper helper;
	public AmazonProductAdvertisingAPIDao() {
		try {
		helper = SignedRequestsHelper.getInstance(endpoint, AWSAccessKeyId, AWSSecretKey);
		}
		catch(Exception e) {
			//blah
		}
	}
	
	public void search(String searchCriteria) throws Exception {
		Map<String, String> params = new HashMap<String, String>();
		params.put("Service", "AWSECommerceService");
		params.put("Version", "2013-08-01");
		params.put("Operation", "ItemSearch");
		params.put("SearchIndex", "Apparel");
		params.put("Keywords", "jeans");
		params.put("AssociateTag", "wwwfitvizerco-20");
		
		String signedUrl = helper.sign(params);
		
		RestTemplate restTemplate = new RestTemplate();
		String page = restTemplate.getForObject(signedUrl, String.class);
		System.out.println(page);
		
	}
	
	public static void main(String args[]) {
		AmazonProductAdvertisingAPIDao dao = new AmazonProductAdvertisingAPIDao();
		try {
		dao.search("blah");
		}
		catch(Exception ex) {
			System.out.println(ex.getMessage());
		}
	}

}
