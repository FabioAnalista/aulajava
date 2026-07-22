import java.util.Scanner;

public class VerificadorPrimo {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Digite um número: ");
        int numero = scanner.nextInt();

        if (ehPrimo(numero)) {
            System.out.println(numero + " É um número PRIMO!");
        } else {
            System.out.println(numero + " NÃO é um número primo.");
        }

        scanner.close();
    }

    public static boolean ehPrimo(int n) {
        if (n <= 1) {
            return false; // Números menores ou iguais a 1 não são primos
        }

       
        for (int i = 2; i <= n / 2; i++) {
            if (n % i == 0) {
                return false; // Encontrou um divisor, então não é primo
            }
        }
        
        return true; 
    }
}
