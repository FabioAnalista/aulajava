import java.util.Scanner;

public class CalculoFatorial {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.util.Scanner(System.in));
        
        System.out.print("Digite um número inteiro positivo: ");
        int numero = scanner.nextInt();
        
        if (numero < 0) {
            System.out.println("O fatorial não está definido para números negativos.");
        } else {
            long fatorial = 1; // Usamos long para evitar estouro de capacidade em números maiores
            
            // Laço de repetição multiplicando do número até 1
            for (int i = numero; i > 0; i--) {
                fatorial *= i;
            }
            
            System.out.println("O fatorial de " + numero + " é: " + fatorial);
        }
        
        scanner.close();
    }
}

