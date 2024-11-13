import React from "react";
import CodeBlock from "../component/CodeBlock";
const SMA = () => {
  const tp1 = `import java.io.DataOutputStream;
import java.io.DataInputStream;
import java.io.PipedInputStream;
import java.io.PipedOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
// Fibonacci Generator Agent
class AgFibo extends Thread {
    private DataOutputStream out;

    public AgFibo(PipedOutputStream out) {
        this.out = new DataOutputStream(out);
    }

    public void run() {
        try {
            int f0 = 0, f1 = 1;
            System.out.println("Generating Fibonacci sequence...");
            out.writeInt(f0);
            out.writeInt(f1);



            
            for (int i = 2; i < 10; i++) {
                int next = f0 + f1;
                out.writeInt(next);
                f0 = f1;
                f1 = next;
            }
            out.flush();
            out.close();  // Close after writing all data
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

// Square Generator Agent
class AgSqr extends Thread {
    private DataOutputStream out;

    public AgSqr(PipedOutputStream out) {
        this.out = new DataOutputStream(out);
    }

    public void run() {
        try {
            System.out.println("Generating squares of integers...");
            for (int i = 0; i < 10; i++) {
                int square = i * i;
                out.writeInt(square);
            }
            out.flush();
            out.close();  // Close after writing all data
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

// Classifier Agent
class AgClass extends Thread {
    private DataInputStream fiboIn;
    private DataInputStream sqrIn;
    private List<Integer> sortedList = new ArrayList<>();

    public AgClass(PipedInputStream fiboIn, PipedInputStream sqrIn) {
        this.fiboIn = new DataInputStream(fiboIn);
        this.sqrIn = new DataInputStream(sqrIn);
    }

    public void run() {
        try {
            boolean readingFiboDone = false;
            boolean readingSqrDone = false;

            // Continuously read from the pipes until both are done
            while (!readingFiboDone || !readingSqrDone) {
                boolean hasData = false;

                if (!readingFiboDone && fiboIn.available() > 0) {
                    try {
                        int fiboNumber = fiboIn.readInt();
                        sortedList.add(fiboNumber);
                        hasData = true;
                    } catch (IOException e) {
                        readingFiboDone = true;  // Stop reading if exception occurs
                    }
                }

                if (!readingSqrDone && sqrIn.available() > 0) {
                    try {
                        int squareNumber = sqrIn.readInt();
                        sortedList.add(squareNumber);
                        hasData = true;
                    } catch (IOException e) {
                        readingSqrDone = true;  // Stop reading if exception occurs
                    }
                }

                if (hasData) {
                    Collections.sort(sortedList);
                    System.out.println("Sorted numbers: " + sortedList);
                }

                if (fiboIn.available() == 0 && sqrIn.available() == 0 && readingFiboDone && readingSqrDone) {
                    break;  // Break loop when both pipes are finished
                }
            }

            fiboIn.close();
            sqrIn.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

// Main class to start all agents
public class Main {
    public static void main(String[] args) throws IOException {
        // Create pipes for communication
        PipedOutputStream fiboOut = new PipedOutputStream();
        PipedInputStream fiboIn = new PipedInputStream(fiboOut);

        PipedOutputStream sqrOut = new PipedOutputStream();
        PipedInputStream sqrIn = new PipedInputStream(sqrOut);

        // Start AgFibo and AgSqr threads
        AgFibo agFibo = new AgFibo(fiboOut);
        AgSqr agSqr = new AgSqr(sqrOut);
        agFibo.start();
        agSqr.start();

        // Start AgClass thread to collect and sort results
        AgClass agClass = new AgClass(fiboIn, sqrIn);
        agClass.start();
    }
}

`;
  const prime_beta = `
////Prime 
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.PipedOutputStream;
public class Prime extends Thread {
    private DataOutputStream out;
    public Prime (PipedOutputStream out) {
        this.out =new DataOutputStream(out);
    }
    public void run (){
        try {
            System.out.println("Starting generating prime numbers");
            int count=0,num=2;
            while (count < 10) {
                if (isPrime(num)){
                    out.writeInt(num);
                    count++;
                }
                num++;
            }
            out.flush();
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    private boolean isPrime(int num) {
        if (num <= 1) return false;
        for (int i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) return false;
        }
        return true;
    }
}

//// Cube 
import java.io.DataOutputStream;
import java.io.IOException;
import java.io.PipedOutputStream;
public class Cube extends Thread {
    private DataOutputStream out;
    public Cube (PipedOutputStream out) {
        this.out = new DataOutputStream(out);
    }
    public void run () {
        try {
            System.out.println("Starting generating Cube numbers");
            
            for (int i = 0; i < 10; i++) {
                int cube = i * i * i;
                out.writeInt(cube);
            }
            out.flush();
            out.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
//// Class 
import java.io.DataInputStream;
import java.io.IOException;
import java.io.PipedInputStream;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
public class Class extends Thread {
    private DataInputStream primeIn;
    private DataInputStream cubeIn;
    private List<Integer> sortedList = new ArrayList<>();
    public Class(PipedInputStream primeIn, PipedInputStream cubeIn) {
        this.primeIn = new DataInputStream(primeIn);
        this.cubeIn = new DataInputStream(cubeIn);
    }
    public void run() {
        try {
            boolean readingPrimeDone = false;
            boolean readingCubeDone = false;

            while (!readingPrimeDone || !readingCubeDone) {
                boolean hasData = false;

                if (!readingPrimeDone && primeIn.available() > 0) {
                    try {
                        int primeNumber = primeIn.readInt();
                        sortedList.add(primeNumber);
                        hasData = true;
                    } catch (IOException e) {
                        readingPrimeDone = true;
                    }
                }

                if (!readingCubeDone && cubeIn.available() > 0) {
                    try {
                        int cubeNumber = cubeIn.readInt();
                        sortedList.add(cubeNumber);
                        hasData = true;
                    } catch (IOException e) {
                        readingCubeDone = true;
                    }
                }

                if (hasData) {
                    Collections.sort(sortedList);
                    System.out.println("Sorted numbers: " + sortedList);
                }

                if (primeIn.available() == 0 && cubeIn.available() == 0 && readingPrimeDone && readingCubeDone) {
                    break;
                }
            }

            primeIn.close();
            cubeIn.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
////// Main 
import java.io.DataOutputStream;
import java.io.DataInputStream;
import java.io.PipedInputStream;
import java.io.PipedOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
public class Main {
    public static void main(String[] args) throws IOException {
      
        PipedOutputStream primeOut = new PipedOutputStream();
        PipedInputStream primeIn = new PipedInputStream(primeOut);

        PipedOutputStream cubeOut = new PipedOutputStream();
        PipedInputStream cubeIn = new PipedInputStream(cubeOut);

        
        Prime prime = new Prime(primeOut);
        Cube cube = new Cube(cubeOut);
        prime.start();
        cube.start();

        
        Class classeur = new Class(primeIn, cubeIn);
        classeur.start();
    }
}

`;
  return (
    <div>
      <CodeBlock code={tp1} Title='Tp1 (Fib_Square_Classeur)' />
      <CodeBlock code={prime_beta} Title='Prime Cube Class (beta)' />
    </div>
  );
};

export default SMA;
