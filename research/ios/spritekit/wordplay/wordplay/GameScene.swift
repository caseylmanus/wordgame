//
//  GameScene.swift
//  wordplay
//
//  Created by Casey Manus on 2/17/15.
//  Copyright (c) 2015 ActiveRefuge. All rights reserved.
//

import SpriteKit
import CoreMotion

class GameScene: SKScene {
    override func didMoveToView(view: SKView) {
        self.motionManager = CMMotionManager()
        self.motionManager!.startAccelerometerUpdates()
        let ship = SKSpriteNode(imageNamed: "Spaceship")
        ship.xScale = 0.2
        ship.yScale = 0.2
        ship.position = CGPoint(x:CGRectGetMidX(self.frame), y:CGRectGetMidY(self.frame))
        ship.name = "ship"
        ship.physicsBody = SKPhysicsBody(rectangleOfSize: ship.frame.size)
        ship.physicsBody!.affectedByGravity = false
        ship.physicsBody!.mass = 0.2
        ship.physicsBody!.dynamic = true
        self.addChild(ship)
        //create the border physics body
        self.physicsBody = SKPhysicsBody(edgeLoopFromRect: self.frame)
        self.physicsBody!.friction = 0.0
    }
    var motionManager:CMMotionManager? = nil

    
    override func touchesBegan(touches: NSSet, withEvent event: UIEvent) {
        /* Called when a touch begins */
        let ship = self.childNodeWithName("ship") as SKSpriteNode
        for touch: AnyObject in touches {
            let laser = SKShapeNode(rectOfSize: CGSize(width:2, height:15));
            laser.fillColor = SKColor.whiteColor()
            laser.position = ship.position
            laser.name = "laser"
            self.addChild(laser)
            let fire = SKAction.moveTo(CGPoint(x: laser.position.x, y: self.size.height + 15), duration: 1.0)
            laser.runAction(fire)

        }
    
    }
    func processUserMotionForUpdate(currentTime: CFTimeInterval){
        let ship = self.childNodeWithName("ship") as SKSpriteNode
        if(self.motionManager != nil){
            //2
            let data:CMAccelerometerData? = self.motionManager!.accelerometerData;
            //3
            if(data != nil){
                if (fabs(data!.acceleration.y) > 0.2) {
                    print("Acceleration Y at sample = ")
                    println(data!.acceleration.y)
                    let x:CGFloat = CGFloat(data!.acceleration.y) * 40.0
                    let vector:CGVector = CGVectorMake(x, 0)
                    ship.physicsBody!.applyForce(vector)
                }
            }
        }
        //don't let the ship leave the bounds of the board
        let board:CGRect = self.view!.bounds;
    }
   
    override func update(currentTime: CFTimeInterval) {
        self.processUserMotionForUpdate(currentTime)
        //here is where enemy's move and collision detection happens
    }
}
