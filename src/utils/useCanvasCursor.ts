import { useEffect } from "react";

// Type definitions
interface Pos {
  x: number;
  y: number;
}

interface LineConfig {
  spring: number;
}

interface NodeType {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

interface EType {
  debug: boolean;
  friction: number;
  trails: number;
  size: number;
  dampening: number;
  tension: number;
}

interface ContextType extends CanvasRenderingContext2D {
  running: boolean;
  frame: number;
}

interface OscillatorConfig {
  phase: number;
  offset: number;
  frequency: number;
  amplitude: number;
}

// Oscillator class (previously 'n')
class Oscillator {
  phase!: number;
  offset!: number;
  frequency!: number;
  amplitude!: number;

  constructor(config: OscillatorConfig) {
    this.init(config);
  }

  init(config: OscillatorConfig): void {
    this.phase = config.phase || 0;
    this.offset = config.offset || 0;
    this.frequency = config.frequency || 0.001;
    this.amplitude = config.amplitude || 1;
  }

  update(): number {
    this.phase += this.frequency;
    return this.offset + Math.sin(this.phase) * this.amplitude;
  }

  value(): number {
    return this.offset;
  }
}

// Line class
class Line {
  spring!: number;
  friction!: number;
  nodes!: NodeType[];

  constructor(config: LineConfig) {
    this.init(config);
  }

  init(config: LineConfig): void {
    this.spring = config.spring + 0.1 * Math.random() - 0.02;
    this.friction = E.friction + 0.01 * Math.random() - 0.002;
    this.nodes = [];
    for (let i = 0; i < E.size; i++) {
      const node = new Node();
      node.x = pos.x;
      node.y = pos.y;
      this.nodes.push(node);
    }
  }

  update(): void {
    let spring = this.spring;
    let node = this.nodes[0];
    node.vx += (pos.x - node.x) * spring;
    node.vy += (pos.y - node.y) * spring;

    for (let i = 0, len = this.nodes.length; i < len; i++) {
      node = this.nodes[i];
      if (i > 0) {
        const prevNode = this.nodes[i - 1];
        node.vx += (prevNode.x - node.x) * spring;
        node.vy += (prevNode.y - node.y) * spring;
        node.vx += prevNode.vx * E.dampening;
        node.vy += prevNode.vy * E.dampening;
      }
      node.vx *= this.friction;
      node.vy *= this.friction;
      node.x += node.vx;
      node.y += node.vy;
      spring *= E.tension;
    }
  }

  draw(): void {
    let node1 = this.nodes[0];
    let node2: NodeType;
    let midX: number, midY: number;

    ctx.beginPath();
    ctx.moveTo(node1.x, node1.y);

    for (let i = 1; i < this.nodes.length - 1; i++) {
      node1 = this.nodes[i];
      node2 = this.nodes[i + 1];
      midX = 0.5 * (node1.x + node2.x);
      midY = 0.5 * (node1.y + node2.y);
      ctx.quadraticCurveTo(node1.x, node1.y, midX, midY);
    }

    node1 = this.nodes[this.nodes.length - 2];
    node2 = this.nodes[this.nodes.length - 1];
    ctx.quadraticCurveTo(node1.x, node1.y, node2.x, node2.y);
    ctx.stroke();
    ctx.closePath();
  }
}

// Node class
class Node implements NodeType {
  x: number;
  y: number;
  vx: number;
  vy: number;

  constructor() {
    this.x = 0;
    this.y = 0;
    this.vx = 0;
    this.vy = 0;
  }
}

// Global variables
let ctx: ContextType;
let f: Oscillator;
let e = 0;
let pos: Pos = { x: 0, y: 0 };
let lines: Line[] = [];
const E: EType = {
  debug: true,
  friction: 0.5,
  trails: 20,
  size: 50,
  dampening: 0.25,
  tension: 0.98,
};

// Event handlers
function onMousemove(e: MouseEvent | TouchEvent): void {
  const updatePos = (e: MouseEvent | TouchEvent) => {
    if ("touches" in e) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    } else {
      pos.x = e.clientX;
      pos.y = e.clientY;
    }
    e.preventDefault();
  };

  const initLines = () => {
    lines = [];
    for (let i = 0; i < E.trails; i++) {
      lines.push(new Line({ spring: 0.4 + (i / E.trails) * 0.025 }));
    }
  };

  document.removeEventListener("mousemove", onMousemove);
  document.removeEventListener("touchstart", onMousemove);
  document.addEventListener("mousemove", updatePos);
  document.addEventListener("touchmove", updatePos);
  document.addEventListener("touchstart", (e: TouchEvent) => {
    if (e.touches.length === 1) {
      pos.x = e.touches[0].pageX;
      pos.y = e.touches[0].pageY;
    }
  });

  updatePos(e);
  initLines();
  render();
}

function render(): void {
  if (ctx.running) {
    ctx.globalCompositeOperation = "source-over";
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = `hsla(${Math.round(f.update())},50%,50%,0.2)`;
    ctx.lineWidth = 1;

    for (const line of lines) {
      line.update();
      line.draw();
    }

    ctx.frame++;
    window.requestAnimationFrame(render);
  }
}

function resizeCanvas(): void {
  ctx.canvas.width = window.innerWidth - 20;
  ctx.canvas.height = window.innerHeight;
}

// Hook implementation
const useCanvasCursor = (): void => {
  useEffect(() => {
    const renderCanvas = () => {
      const canvas = document.getElementById("canvas") as HTMLCanvasElement;
      ctx = canvas.getContext("2d") as ContextType;
      ctx.running = true;
      ctx.frame = 1;

      f = new Oscillator({
        phase: Math.random() * 2 * Math.PI,
        amplitude: 85,
        frequency: 0.0015,
        offset: 285,
      });

      document.addEventListener("mousemove", onMousemove);
      document.addEventListener("touchstart", onMousemove);
      document.body.addEventListener("orientationchange", resizeCanvas);
      window.addEventListener("resize", resizeCanvas);
      window.addEventListener("focus", () => {
        if (!ctx.running) {
          ctx.running = true;
          render();
        }
      });
      window.addEventListener("blur", () => {
        ctx.running = false;
      });

      resizeCanvas();
    };

    renderCanvas();

    return () => {
      ctx.running = false;
      document.removeEventListener("mousemove", onMousemove);
      document.removeEventListener("touchstart", onMousemove);
      document.body.removeEventListener("orientationchange", resizeCanvas);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("focus", () => {
        if (!ctx.running) {
          ctx.running = true;
          render();
        }
      });
      window.removeEventListener("blur", () => {
        ctx.running = true;
      });
    };
  }, []);
};

export default useCanvasCursor;
