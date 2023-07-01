class MathUtils {
  // Basic arithmetic operations
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }

  static multiply(a, b) {
    return a * b;
  }

  static divide(a, b) {
    return a / b;
  }

  // Exponential and logarithmic functions
  static power(base, exponent) {
    return Math.pow(base, exponent);
  }

  static sqrt(a) {
    return Math.sqrt(a);
  }

  static cbrt(a) {
    return Math.cbrt(a);
  }

  static log(a) {
    return Math.log(a);
  }

  static log10(a) {
    return Math.log10(a);
  }

  static exp(a) {
    return Math.exp(a);
  }

  // Trigonometric functions
  static sin(angle) {
    return Math.sin(angle);
  }

  static cos(angle) {
    return Math.cos(angle);
  }

  static tan(angle) {
    return Math.tan(angle);
  }

  static asin(value) {
    return Math.asin(value);
  }

  static acos(value) {
    return Math.acos(value);
  }

  static atan(value) {
    return Math.atan(value);
  }

  // Floating-point representations
  static round(a, decimals = 0) {
    const factor = 10 ** decimals;
    return Math.round(a * factor) / factor;
  }

  static floor(a) {
    return Math.floor(a);
  }

  static ceil(a) {
    return Math.ceil(a);
  }

  static abs(a) {
    return Math.abs(a);
  }

  static random(min, max) {
    return Math.random() * (max - min) + min;
  }

  // Advanced math functions
  static factorial(n) {
    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * this.factorial(n - 1);
    }
  }

  static gcd(a, b) {
    if (b === 0) {
      return a;
    } else {
      return this.gcd(b, a % b);
    }
  }

  static lcm(a, b) {
    return (a * b) / this.gcd(a, b);
  }

  static isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  static fibonacci(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const sequence = [0, 1];
      for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
      }
      return sequence;
    }
  }

  static nthRoot(number, root) {
    return number ** (1 / root);
  }

  // Graphics functions
  static degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
  }

  static radiansToDegrees(radians) {
    return radians * (180 / Math.PI);
  }

  static clamp(value, min, max) {
    return Math.max(min, Math.min(value, max));
  }

  static map(value, inMin, inMax, outMin, outMax) {
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }

  // Physics functions
  static calculateForce(mass, acceleration) {
    return mass * acceleration;
  }

  static calculateAcceleration(force, mass) {
    return force / mass;
  }

  static calculateVelocity(initialVelocity, acceleration, time) {
    return initialVelocity + acceleration * time;
  }

  static calculateDisplacement(initialVelocity, acceleration, time) {
    return initialVelocity * time + 0.5 * acceleration * Math.pow(time, 2);
  }

  static calculateWork(force, displacement, angle) {
    const theta = MathUtils.degreesToRadians(angle);
    return force * displacement * Math.cos(theta);
  }

  static calculatePower(work, time) {
    return work / time;
  }

  static calculateKineticEnergy(mass, velocity) {
    return 0.5 * mass * Math.pow(velocity, 2);
  }

  static calculatePotentialEnergy(mass, height, gravity = 9.8) {
    return mass * gravity * height;
  }
}
