import java.util.*;

public class Main {

	int value(char c)
	{
		if (c == 'I')
			return 1;
		if (c == 'V')
			return 5;
		if (c == 'X')
			return 10;
		if (c == 'L')
			return 50;
		if (c == 'C')
			return 100;
		if (c == 'D')
			return 500;
		if (c == 'M')
			return 1000;
		return -1;
	}


	int romanToDecimal(String str)
	{
		int number = 0;

		for (int i = 0; i < str.length(); i++) {
			int s1 = value(str.charAt(i));

			if (i + 1 < str.length()) {
				int s2 = value(str.charAt(i + 1));


				if (s1 >= s2) {
					number = number + s1;
				}
				else {
					number = number + s2 - s1;
					i++;
				}
			}
			else {
				number = number + s1;
			}
		}

		return number;
	}

	public static void main(String args[])
	{
		Main ob = new Main();

		String str = "IX";
		System.out.println("Answer - "+ ob.romanToDecimal(str));
	}
}
