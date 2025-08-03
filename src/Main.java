import org.kociemba.twophase.Search;

public class Main {
    public static void main(String[] args) {
        // Example scrambled cube string: must use URFDLB ordering
        String scramble = "DUUBULDBFRBFRRULLLBRDFFFBLURDBFDFDRFRULBLUFDURRBLBDUDL";

        try {
            // Call the solver: facelets, maxDepth (≤22), timeout in ms, options=0
            String solution = Search.solution(scramble, 21, 5000, false);
            System.out.println("Solution: " + solution);
        } catch (Exception e) {
            System.err.println("Error solving cube: " + e.getMessage());
        }
    }
}
