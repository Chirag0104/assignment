import java.util.*;

public class Main {


	static int checkPangram(String str) {
	
		Set<Character> set = new HashSet<Character>();

		for (int i=0;i<str.length();i++) {

			if (str.charAt(i) >= 'a' && str.charAt(i) <= 'z')
				set.add(str.charAt(i));

			if (str.charAt(i) >= 'A' && str.charAt(i) <= 'Z') {
	
				char ch = Character.toLowerCase(str.charAt(i));
				set.add(ch);
			}
		}

		return set.size();
	}


	public static void main(String[] args) {
		String str = "Pack my box with five dozen liquor jugs";
		if (checkPangram(str)==26)
			System.out.println("It is a Pangram");
		else
			System.out.println("It is Not a Pangram");
	}
}
