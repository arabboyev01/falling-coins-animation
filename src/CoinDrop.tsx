import React from "react";
import { type Sketch } from "@p5-wrapper/react";
import { NextReactP5Wrapper } from "@p5-wrapper/next";

const CoinDropSketch: Sketch = (p5) => {
    let coins: Coin[] = []
    const maxCoins = 100
    const fillLevel = 0.7

    class Coin {
        x: number
        y: number
        size: number
        speed: number

        constructor(x: number, y: number) {
            this.x = x
            this.y = y
            this.size = p5.random(20, 50)
            this.speed = p5.random(2, 5)
        }

        update() {
            this.y += this.speed
        }

        display() {
            p5.fill(255, 223, 0);
            p5.noStroke();
            p5.ellipse(this.x, this.y, this.size);
        }

        isOffScreen(): boolean {
            return this.y > p5.height + this.size;
        }
    }

    p5.setup = () => {
        p5.createCanvas(p5.windowWidth, p5.windowHeight)
    }

    p5.draw = () => {
        p5.background(0);
        for (let i = coins.length - 1; i >= 0; i--) {
            coins[i].update();
            coins[i].display();
            if (coins[i].isOffScreen()) {
                coins.splice(i, 1);
            }
        }

        if (coins.length > maxCoins || calculateFillLevel() >= fillLevel) {
            return;
        }

        if (p5.mouseIsPressed) {
            const newCoin = new Coin(p5.mouseX, p5.mouseY)
            coins.push(newCoin)
        }
    }

    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight)
    }

    const calculateFillLevel = (): number => {
        let totalHeight = 0;
        coins.forEach((coin) => (totalHeight += coin.size))
        return totalHeight / p5.height
    }
}

const CoinDrop: React.FC = () => {
    return <NextReactP5Wrapper sketch={CoinDropSketch} />
}
export default CoinDrop
