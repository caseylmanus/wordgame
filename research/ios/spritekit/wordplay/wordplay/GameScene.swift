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
        self.addChild(ship)
    }
    var motionManager:CMMotionManager? = nil
    
    override func touchesMoved(touches: NSSet, withEvent event: UIEvent) {
        let ship = self.childNodeWithName("ship") as SKSpriteNode
        for touch: AnyObject in touches {
            let location = touch.locationInNode(self)
            let action = SKAction.moveTo(location, duration: 0)
            ship.runAction(action)
        }
    }
    
    
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
        println("Accelerometer data recieved")
        //SKSpriteNode* ship = (SKSpriteNode*)[self childNodeWithName:kShipName];
        //2
        //CMAccelerometerData* data = self.motionManager.accelerometerData;
        //3
        //if (fabs(data.acceleration.x) > 0.2) {
            //4 How do you move the ship?
        //    [ship.physicsBody applyForce:CGVectorMake(40.0 * data.acceleration.x, 0)];
        //    NSLog(@"How do you move the ship: %@", ship);
       // }

    }
   
    override func update(currentTime: CFTimeInterval) {
        self.processUserMotionForUpdate(currentTime)
        //here is where enemy's move and collision detection happens
    }
}
