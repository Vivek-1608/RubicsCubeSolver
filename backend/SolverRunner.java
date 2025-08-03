package backend;

import org.kociemba.twophase.Search;

public class SolverRunner {

     // ✅ Method to check if cube is already solved
    private static boolean isSolved(String cube) {
        if (cube.length() != 54) return false;

        for (int i = 0; i < 54; i += 9) {
            char c = cube.charAt(i);
            for (int j = 1; j < 9; j++) {
                if (cube.charAt(i + j) != c) {
                    return false;
                }
            }
        }
        return true;
    }

    public static String solve(String scramble) throws Exception {
        if (isSolved(scramble)) {
            return "Cube is already solved"; // 🎉 Already solved
        }
        return Search.solution(scramble, 21, 5000, false);
    }

    // Add this main method
    public static void main(String[] args) {
        if (args.length == 0) {
            System.err.println("No scramble string provided.");
            return;
        }

        try {
            String scramble = args[0];
            String solution = solve(scramble);
            System.out.println("Solution: " + solution);
        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
        }
    }
}
