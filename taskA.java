import java.util.Random;
import java.util.Arrays;
public class Main
{
	
	static void shuffle( int arr[], int n)
	{
		Random r = new Random();
		for (int i = n-1; i > 0; i--) {
			int j = r.nextInt(i+1);
			int temp = arr[i];
			arr[i] = arr[j];
			arr[j] = temp;
		}
	}
    
	public static void main(String[] args)
	{
		int[] arr = {1, 2, 3, 4, 5, 6, 7};
		int n = 7;
		shuffle (arr, n);
		for(int i=0;i<n;i++){
		    System.out.print(arr[i]+" , ");
		}
	}
}
